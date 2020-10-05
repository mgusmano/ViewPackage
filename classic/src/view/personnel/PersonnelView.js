Ext.define('MyApp.view.personnel.PersonnelView',{
	extend: 'Ext.grid.Panel',
  xtype: 'personnelview',
  //alias: 'widget.personnelview',
	cls: 'personnelview',
  requires: [],
  //viewModel: {type: 'personnelviewmodel'},
	controller: 'personnelviewcontroller',
  bind: {
    title: '{name}'
  },
  tbar: [
    {xtype: 'button',text: 'Button 1',reference: 'button1',handler: 'onClickButton1'},
    {xtype: 'button',text: 'Button 2',reference: 'button2',handler: 'onClickButton2'},
  ],
  // initComponent: function() {
  //   console.log('initComponent in View')
  //   this.callParent(arguments)
  //   //var vm = this.getViewModel()
  //   var vm = this.lookupViewModel()
  //   var vc = this.getController()
  //   var name = vm.get('name')
  //   console.log(name)
  //   vc.calledFromView()
  // },

  store: {type: 'personnelviewstore'},
	columns: [
		{
      text: 'Name',
			dataIndex: 'name',
			width: 100,
			cell: {userCls: 'bold'}
		},
		{text: 'Email',dataIndex: 'email',width: 230},
		{
			text: 'Phone',
			dataIndex: 'phone',
			width: 150
		}
	],
	listeners: {
		select: 'onItemSelected'
	}
});
