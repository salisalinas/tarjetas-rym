import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, Injector, NgModule} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class TarjetaComponent {
  @Input() contenido?: string;
  @Input() imgSrc?: string;
  @Input() character: any;
}
@NgModule({
  imports: [CommonModule, CardModule],

})

export class TarjetaModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(TarjetaComponent, { injector });
    customElements.define('app-tarjeta', customElement);
  }

  ngDoBootstrap() {}
}