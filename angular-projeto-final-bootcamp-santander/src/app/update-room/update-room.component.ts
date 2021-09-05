import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id: number;
  room: Room;
  submitted = false;


  constructor(private route: ActivatedRoute,private router: Router,
    private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];
    
    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  updateRoom() {
    if(this.validaHoras()){
      this.roomService.updateRoom(this.id, this.room)
        .subscribe(data => console.log(data), error => console.log(error));
      this.room = new Room();
      this.gotoList();
    } else {
      alert("!Hora inicial deve ser maior que hora final!");
    }
  }

  onSubmit() {
    this.updateRoom();    
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
