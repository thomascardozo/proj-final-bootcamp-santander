import { Room } from '../room';
import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../room.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Inicio } from '../inicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent implements OnInit {

  id: number;
  inicio: Inicio;

  constructor(private route: ActivatedRoute,private router: Router,
    private roomService: RoomService) { }

  ngOnInit() {
    this.inicio = new Inicio();
    this.id = this.route.snapshot.params['id'];

    console.log('MENSAGEM');

    this.roomService.getInicio;
 
    }

  list(){
    this.router.navigate(['rooms']);
  }
  
}
