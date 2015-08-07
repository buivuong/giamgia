var FormChangePassWord = require('client/user/components/changePassword/form');
var Identification = React.createClass({
	onClick: function(){
		this.refs.form.refresh();
		this.refs.dialog.show();
	},
	onClickForm: function(keyLink){
    switch(keyLink){
      case "onClickCancel":
        this.refs.dialog.hide();
        break;
      case "onClickSaveSuccess":
          this.refs.dialog.hide();
          alertify.success("Update password success");
        break;
      case "onClickSaveFail":
          this.refs.dialog.hide();
          alertify.error("Update password fail");
        break;
    }
	},
	render: function(){
		return (
			 <Panel className="panel panel-primary panel-alt no-border-radius">
                <Panel className="panel-heading no-border-radius">
			        <Panel className="panel-btns">
			          <Title type="h4" className="no-margin">
			          		Identification
			          </Title>
				            <Link className="btn btn-sm btn-primary pull-right font-size-12px color-white no-border-radius" onClick={this.onClick}>
				            	Edit
				            </Link>
			        </Panel>
		        </Panel>
               <Panel className="panel-body">
               		<Row className="row padding-bottom-larger padding-top-larger">
               			<Column className="col-sm-9 col-xs-12">
              				<Table>
              					<TableRow>
                 					<TableHeader>Email:</TableHeader>
                 					<TableColumn>dieu@offer.vn</TableColumn>
               					</TableRow>
               					<TableRow>
                 					<TableHeader>Password:</TableHeader>
                 					<TableColumn>********</TableColumn>
               					</TableRow>
              				</Table>
               			</Column>
               		</Row>
            	</Panel>
            	<Dialog ref="dialog" className="modal-dialog doctorgroup-detail-wrap modal-wrap">
            		<DialogContent className="modal-content no-border-radius">
            			<DialogHeader className="modal-header bg-main color-white">
            				<Link className="close color-white" onClick={this.onClickForm}>
            					&times;
            				</Link>
            				<Title type="h4" className="modal-title">
            					Change Email or Password
            				</Title>
            			</DialogHeader>
            			<DialogBody className="modal-body">
            				<FormChangePassWord ref="form" onClick={this.onClickForm} />
            			</DialogBody>
            		</DialogContent>
            	</Dialog>
      		</Panel>
			);
	}
});
module.exports = Identification;