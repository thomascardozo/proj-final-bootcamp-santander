import { RoomService } from '../room.service';
import { Room } from '../room';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  submitted = false;
  validatingForm: FormGroup;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      required: new FormControl(null, Validators.required)
    });
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  newRoomHorarioinvalido(): void {
    this.submitted = false;
  }

  save() {
    if(this.validaHoras()){
      this.roomService.createRoom(this.room)
        .subscribe(data => console.log(data), error => console.log(error));
      this.room = new Room();
      this.gotoList();
    } else {
      this.newRoomHorarioinvalido();
    }
  }

  onSubmit() {
    this.submitted = true;    
      this.save();       
  }

  gotoAdd() {
    this.router.navigate(['/add']);
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }

  validaHoras(){
    var horaInicial = this.room.startHour;
    var horaFinal = this.room.endHour;

    console.log('hora inicial', horaInicial);
    console.log('hora final', horaFinal);

    if (!horaInicial || !horaFinal) return false;

    if (horaInicial >= horaFinal) {
        alert("!Hora inicial deve ser maior que hora final!");
    } else {
        alert("Hora salva com sucesso!");
        return true;
    }
  }

}
