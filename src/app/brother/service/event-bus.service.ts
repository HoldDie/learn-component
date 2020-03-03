/**
 * 用来充当事件总线的Service
 *
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class EventBusService {
  public eventBus: Subject<string> = new Subject<string>();

  constructor() {
  }

}
