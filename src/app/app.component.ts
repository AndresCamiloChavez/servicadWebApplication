import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servicadweb';
  nameButtonLogin = "Iniciar sesión";
  nameButtonLogin1 = "Cerrar sesión";
  nameButtonLogin2 = "Cambiar contraseña";

  changeName() {
    this.nameButtonLogin = "algo";
  }
}
