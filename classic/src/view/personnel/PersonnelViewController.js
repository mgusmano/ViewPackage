Ext.define('MyApp.view.personnel.PersonnelViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.personnelviewcontroller',


  init: function(view) {
    console.log('init in ViewController')
    console.log(view.xtype)
    console.log(this.getViewModel())
    this.button1 = this.lookup('button1')
    this.calledFromView()
  },


  calledFromView: function(sender, record) {
    console.log('calledFromView')
    var view = this.getView()
    console.log(view.xtype)
    var vm = this.getViewModel()
    var name = vm.get('name')
    console.log(name)
    //var button1 = this.lookupReference('button1')
    var button1 = this.lookup('button1')
    var text = button1.getText()
    console.log(text)

  },


  onClickButton1: function(sender, record) {
    console.log('clicked')
    var view = this.getView()
    console.log(view.xtype)
    var vm = this.getViewModel()
    var name = vm.get('name')
    console.log(name)
    var button2 = this.lookup('button2')
    var text = button2.getText()
    console.log(text)
  },


  onClickButton2: function(sender, record) {
    var vm = this.getViewModel()
    vm.set('name', 'new name')
  },


  // init: (view) => {
  // },


	onItemSelected: function (sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	}
});
