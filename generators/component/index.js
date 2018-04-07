var path = require('path')
var humps = require('humps')
var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Component Name'
    }, {
      type   : 'confirm',
      name   : 'withSpecs',
      message: 'Write spec files (default: yes)',
      default: true
    }, {
      type   : 'confirm',
      name   : 'withRedux',
      message: 'Write redux container files (default: no)',
      default: false
    }, {
      type    : 'input',
      name    : 'dir',
      message : 'Dir of components (default: src/components)',
      default: 'src/components'
    }]).then((answers) => {
      this.componentName = humps.pascalize(answers.name)
      this.withSpecs = answers.withSpecs
      this.withRedux = answers.withRedux
      this.dir = answers.dir
    });
  }

  init() {
    this.sourceRoot(__dirname + '/templates')
    this.destinationRoot(path.join(this.dir, this.componentName))
  }

  writePlainComponent() {
    const files = {
      'index.js': 'index.js',
      'Component.js': `${this.componentName}.js`,
      'Component.spec.js': this.withSpecs && `${this.componentName}.spec.js`,
      'ComponentContainer.js': this.withRedux && `${this.componentName}Container.js`,
      'ComponentContainer.spec.js': this.withRedux && this.withSpecs && `${this.componentName}Container.spec.js`
    }

    Object.entries(files).forEach(([fromFile, toFile]) => {
      if (!toFile) return;

      this.fs.copyTpl(
        this.templatePath(fromFile),
        this.destinationPath(toFile),
        {
          componentName: this.componentName
        }
      )
    })
  }
}
