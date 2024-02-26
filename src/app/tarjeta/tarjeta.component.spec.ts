import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComponent } from './tarjeta.component';
import { CardModule } from 'primeng/card';

describe('TarjetaComponent', () => {
  let component: TarjetaComponent;
  let fixture: ComponentFixture<TarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaComponent ],
      imports: [TarjetaComponent, CardModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crearse', () => {
    expect(component).toBeTruthy();
  });
  it('deberia manejar valores por defecto', () => {
    expect(component.contenido).toBeUndefined();
    expect(component.imgSrc).toBeUndefined();
  });

  it('deberia proyectar contenido dentro de <ng-content>', () => {
    const projectedContent = '<p>Projected Content</p>';
    fixture.nativeElement.querySelector('ng-content').innerHTML = projectedContent;
    fixture.detectChanges();
    const content = fixture.nativeElement.querySelector('ng-content').innerHTML;
    expect(content).toContain('Projected Content');
  });
});
