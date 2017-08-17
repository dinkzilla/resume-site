import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  private router;

  public configureRouter(config: RouterConfiguration, router: Router){
    this.router = router;
    config.map([
      { route: '', name: 'home', moduleId: 'routes/home/home'},
      { route: 'work', name: 'work', moduleId: 'routes/work/work'},
      { route: 'dev', name: 'dev', moduleId: 'routes/dev/dev'},
      { route: 'risk', name: 'risk', moduleId: 'routes/risk/risk'},
      { route: 'design', name: 'design', moduleId: 'routes/design/design'}
    ])
  }
}
