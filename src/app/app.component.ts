import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'Aplicaccion de Mapas';
  
    
  zoom: number = 14;
  lat: number = 4.61415459;
  lng: number = -74.0637517;
  dist: number =0;  
    
  
    constructor(){
        
    }
    markerC(marc: marker, index:number){
        console.log("marker Click:"+marc.nombre+"index"+ index);
    }
    mapC($event: any){
        console.log("map Click:");
        
        var newMarker = {
            nombre:"Sin Titulo",
            lat:  $event.coords.lat,
            lng:  $event.coords.lng,
            drag: false
        }
        this.markers.push(newMarker);
    }
    posFM(marc:any,$event:any){
        
        var actMarker={
            nombre: marc.nombre,
            lat:  parseFloat(marc.lat),
            lng:  parseFloat(marc.lng),
            drag: false
        }
        
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
    }
    markers: marker[] =[
      {
      nombre: 'hola',
      lat: 4.61415459,
      lng:  -74.0637517,
      drag: true 
      },
      {
      nombre: "adsasd",
      lat:  4.628993,
      lng:  -74.055287,
      drag: true
      },
      {
      nombre: "asdda",
      lat:  4.6223393,
      lng:  -74.060487,
      drag: true 
      },
      {
      nombre: "adsasd",
      lat:  4.628153,
      lng:  -74.0652777,
      drag: true
      }
                      ];
}

//tipo marcador
interface marker{
    nombre?: string;
    lat:number;
    lng:number;
    drag:boolean;    
}