import {autoinject} from 'aurelia-dependency-injection';
import {Project, ProjectItem, CLIOptions, UI} from 'aurelia-cli';

@autoinject()
export default class RouteGenerator {
  constructor(private project: Project, private options: CLIOptions, private ui: UI) { }

  execute() {
    return this.ui
      .ensureAnswer(this.options.args[0], 'What would you like to call the new route?')
      .then(name => {
        let fileName = this.project.makeFileName(name);
        let className = this.project.makeClassName(name);

        this.project.root.add(
          ProjectItem.text(`routes/${fileName}/${fileName}.ts`, this.generateTsSource(className)),
          ProjectItem.text(`routes/${fileName}/${fileName}.html`, this.generateHtmlSource(className))
        );

        return this.project.commitChanges()
          .then(() => this.ui.log(`Created ${fileName} route files. You must still add it to the route map.`));
      });
  }

  generateTsSource(routeName) {
    return `
export class ${routeName} {

}
`
  }


  generateHtmlSource(routeName) {
    return `
<template>
  ${routeName}
<template>
`
  }
}
