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

  }

  getGoogleMapsByCep(cep: string) {
    this.http.get("http://maps.google.com/maps/api/geocode/json?address=" + cep.replace("-", "") + "&sensor=false").
      map((response) => response.json()).
      subscribe((data) => {this.setMap(data)}
      )

  }

  setMap(data) {
    const mapsData = data.results[0];
    this.setFormValues(mapsData);
    let el = this._elementRef.nativeElement.querySelector('.google-maps');
    GoogleMapsLoader.load((google) => {
      new google.maps.Map(el, {
        center: new google.maps.LatLng(mapsData.geometry.location.lat
          , mapsData.geometry.location.lng),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }

  setFormValues(mapsData) {
    this.form.controls['address'].patchValue({'bairro': mapsData.address_components[1].long_name});    
    this.form.controls['address'].patchValue({'cidade': mapsData.address_components[2].long_name});
    this.form.controls['address'].patchValue({'estado': mapsData.address_components[3].long_name});   
  }



}
