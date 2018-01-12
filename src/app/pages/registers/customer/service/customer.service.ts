import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {

  dataTableData = [{
        'razaoSocial': 'Wing',
        'email': 'tellus.eu.augue@arcu.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Whitney',
        'email': 'sed.dictum@Donec.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Oliver',
        'email': 'mauris@Craslorem.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Vladimir',
        'email': 'mi.Aliquam@Phasellus.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Maggy',
        'email': 'ligula@acorciUt.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Unity',
        'email': 'Nunc.commodo@justo.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Ralph',
        'email': 'augue@penatibuset.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Medge',
        'email': 'sagittis.augue@taciti.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Orli',
        'email': 'nascetur@mipedenonummy.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Ainsley',
        'email': 'morbi.tristique.senectus@enim.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Candice',
        'email': 'turpis.non.enim@fringillami.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Alexis',
        'email': 'lacinia.orci.consectetuer@dolorFuscefeugiat.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Diana',
        'email': 'pede.Cras@a.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Tyrone',
        'email': 'ornare.In@duilectus.co.uk',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Brennan',
        'email': 'scelerisque.lorem@enim.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Lillith',
        'email': 'non@lectus.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Wayne',
        'email': 'at.egestas.a@Pellentesque.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Vielka',
        'email': 'Nam.porttitor@Uttincidunt.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Armando',
        'email': 'Aliquam@orciin.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Justin',
        'email': 'gravida.non.sollicitudin@placerataugue.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Zorita',
        'email': 'enim@risus.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Mariam',
        'email': 'purus.mauris.a@odiosagittis.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Malik',
        'email': 'Nam@enimEtiam.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Claire',
        'email': 'sapien@Nullamlobortis.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Hilel',
        'email': 'tempor@purusmaurisa.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Alea',
        'email': 'vulputate@orciUt.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Nash',
        'email': 'Nunc.ullamcorper.velit@egetmetuseu.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Brennan',
        'email': 'Vestibulum@Sedpharetra.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Diana',
        'email': 'Cras.vulputate@erosturpisnon.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Farrah',
        'email': 'dignissim.tempor.arcu@gravidamaurisut.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'August',
        'email': 'tincidunt.Donec@dictumeleifendnunc.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Reese',
        'email': 'et.magnis.dis@montesnasceturridiculus.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Pascale',
        'email': 'pede.ultrices@lacinia.com',
        'cnpj': '70189358149'
    },
    {
        'razaoSocial': 'Nora',
        'email': 'Ut.semper.pretium@luctussit.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jameson',
        'email': 'dolor.Fusce.feugiat@tempusnon.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Ryder',
        'email': 'Vestibulum.accumsan@egetmetus.co.uk',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Lyle',
        'email': 'libero.nec.ligula@euaugueporttitor.co.uk',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Carly',
        'email': 'vitae.sodales@pretium.co.uk',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Hector',
        'email': 'luctus@orci.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Luke',
        'email': 'luctus.aliquet.odio@bibendumDonecfelis.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Celeste',
        'email': 'et.malesuada.fames@utdolordapibus.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Ila',
        'email': 'urna.Nullam@nullaCraseu.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Leila',
        'email': 'vehicula@orciUtsagittis.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Zahir',
        'email': 'eleifend.non.dapibus@auguescelerisque.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jin',
        'email': 'fames.ac.turpis@Namligula.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Wallace',
        'email': 'natoque.penatibus@tortorIntegeraliquam.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Wallace',
        'email': 'nulla.magna.malesuada@cursusNuncmauris.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Buffy',
        'email': 'est@Vestibulumanteipsum.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jin',
        'email': 'orci.in@nuncsitamet.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Ethan',
        'email': 'ad@enimcommodohendrerit.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Sheila',
        'email': 'dictum@rhoncus.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jolie',
        'email': 'facilisis@uterat.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Eugenia',
        'email': 'dolor@nibhsit.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Suki',
        'email': 'pretium.neque@consequatnecmollis.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Barrett',
        'email': 'a@lobortismaurisSuspendisse.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Tashya',
        'email': 'nascetur@tinciduntadipiscingMauris.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Doris',
        'email': 'vitae@Ut.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Herrod',
        'email': 'arcu.Vestibulum@augueporttitorinterdum.co.uk',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Patience',
        'email': 'gravida@in.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'arden',
        'email': 'tincidunt.nunc.ac@nibhenim.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Harper',
        'email': 'tempor.lorem@quisturpis.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Burke',
        'email': 'lobortis@velpede.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jael',
        'email': 'hendrerit.a.arcu@montes.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Stephanie',
        'email': 'dictum@Inmi.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Frances',
        'email': 'lectus.quis.massa@non.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Mark',
        'email': 'est.Mauris@arcuvel.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Roth',
        'email': 'enim.non.nisi@Lorem.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Dakota',
        'email': 'sed.orci@ligulaAeneaneuismod.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Teegan',
        'email': 'augue.eu.tempor@Integervulputate.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Chandler',
        'email': 'a.odio@sedturpis.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Kathleen',
        'email': 'Ut.tincidunt.vehicula@consectetuerrhoncusNullam.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Scarlet',
        'email': 'Suspendisse.non@montesnascetur.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Haley',
        'email': 'risus@Cras.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jesse',
        'email': 'odio@amet.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Noble',
        'email': 'vulputate.risus.a@Quisqueliberolacus.co.uk',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Phelan',
        'email': 'nascetur.ridiculus@fringilla.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Amos',
        'email': 'Phasellus.fermentum@montesnascetur.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Pandora',
        'email': 'aliquet.Phasellus@sociis.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jada',
        'email': 'eu@a.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Abraham',
        'email': 'Nunc@Vivamus.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Bert',
        'email': 'non.bibendum@mollisduiin.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Lars',
        'email': 'dolor.Fusce.feugiat@metusurnaconvallis.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Bethany',
        'email': 'Sed.nulla.ante@sociosquadlitora.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jasmine',
        'email': 'id.enim.Curabitur@tellus.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Brody',
        'email': 'ac.orci@facilisisnon.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'alec',
        'email': 'in@aliquameu.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Audrey',
        'email': 'Donec@Aliquamadipiscinglobortis.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Forrest',
        'email': 'leo.elementum@ridiculus.co.uk',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jessica',
        'email': 'a.mi.fringilla@montes.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Cedric',
        'email': 'Praesent.eu.nulla@tempordiamdictum.co.uk',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Maile',
        'email': 'pharetra@Duisatlacus.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'acton',
        'email': 'consequat.auctor@Quisque.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Macey',
        'email': 'faucibus@tellus.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Iona',
        'email': 'rutrum.justo@eu.org',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Eve',
        'email': 'risus.Morbi@aliquameros.com',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Jayme',
        'email': 'a.nunc.In@convallisante.ca',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Bo',
        'email': 'posuere.cubilia.Curae@estNunclaoreet.net',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Matthew',
        'email': 'enim.Mauris.quis@vehicula.edu',
        'cnpj': '70189358149'        
    },
    {
        'razaoSocial': 'Justina',
        'email': 'Donec.nibh@Vivamusmolestie.ca',
        'cnpj': '70189358149'
    }
];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }
}
