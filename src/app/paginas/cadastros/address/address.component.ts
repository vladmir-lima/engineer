import {PessoaJuridica} from '../components/pessoa/pessoajuridica';
import {Address} from './address';
import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Http} from '@angular/http';
import * as GoogleMapsLoader from 'google-maps';
import {Observable} from 'rxjs';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() address: Address;

  get cep() {return this.form.get('address.cep')}
  get cidade() {return this.form.get('address.cidade')}
  get bairro() {return this.form.get('address.bairro')}
  get logradouro() {return this.form.get('address.logradouro')}
  get numero() {return this.form.get('address.numero')}

  constructor(private fb: FormBuilder, private _elementRef: ElementRef, private http: Http) {
  }

  //  ngAfterViewInit() {
  //    let el = this._elementRef.nativeElement.querySelector('.google-maps');
  //// KEY: 'qwertyuiopasdfghjklzxcvbnm',
  //    // TODO: do not load this each time as we already have the library after first attempt
  //    GoogleMapsLoader.load((google) => {
  //      new google.maps.Map(el, {
  //        zoom: 20,       
  //        mapTypeId: google.maps.MapTypeId.ROADMAP
  //      });
  //    });
  //  }

  ngOnInit() {
    if (!this.address) {
      this.address = new Address();
    }
    this.form.addControl('address', this.fb.group({
      id: [this.address.id || ''],
      cep: [this.address.cep || '', Validators.required],
      cidade: [this.address.cidade || '', Validators.required],
      estado: [this.address.estado || '', Validators.required],
      numero: [this.address.numero || '', Validators.required],
      bairro: [this.address.bairro || '', Validators.required],
      lote: [this.address.lote || ''],
      logradouro: [this.address.logradouro || '', Validators.required],
      complemento: [this.address.complemento || '']
    }))

    if (this.address.cep) {
      this.getGoogleMapsByCepByUpdating(this.address.cep);
    }

  }

  getGoogleMapsByCep(cep: string) {
    this.getMap(this.setMap, cep);
  }

  getGoogleMapsByCepByUpdating(cep: string) {
    this.getMap(this.loadMap, cep);
  }

  getMap(callBackFunction, cep: string) {
    this.http.get("http://maps.google.com/maps/api/geocode/json?address=" + cep.replace("-", "") + "&sensor=false").
      map((response) => response.json()).
      subscribe((data) => {callBackFunction(data.results[0], cep)}
      )
  }

  setMap = (data, cep) => {
    this.form.controls['address'].reset();
    if (this.isDataInvalid(data)) {
      return;
    }
    this.loadMap(data);
    this.setFormValues(data, cep);
  }

  isDataInvalid(data) {
    return !data;
  }

  loadMap = (data) => {
    if (this.isDataInvalid(data)) {
      return;
    }
    let el = this._elementRef.nativeElement.querySelector('.google-maps'); 
    GoogleMapsLoader.load((google) => {
      new google.maps.Map(el, {
        center: new google.maps.LatLng(data.geometry.location.lat
          , data.geometry.location.lng),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }

  setFormValues(data, cep: string) {

    this.form.controls['address'].patchValue({'bairro': data.address_components ? data.address_components[1].long_name || '' : ''});
    this.form.controls['address'].patchValue({'cidade': data.address_components ? data.address_components[2].long_name || '' : ''});
    this.form.controls['address'].patchValue({'estado': data.address_components ? data.address_components[3].long_name || '' : ''});
    this.form.controls['address'].patchValue({'cep': cep});
  }

}
