var PhoneAndPin = React.createClass({
	render: function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
                <Panel className="panel-heading no-border-radius">
			        <Panel className="panel-btns">
			          <Title type="h4" className="no-margin">
			          		Phone ID and PIN
			          </Title>
				            <Link className="btn btn-sm btn-primary pull-right font-size-12px color-white no-border-radius">
				            	Edit
				            </Link>
			        </Panel>
		        </Panel>
               <Panel className="panel-body">
               		<Row className="row padding-bottom-larger padding-top-larger">
               			<Column className="col-sm-9 col-xs-12">
              				<Table>
              					<TableRow>
                 					<TableHeader>User ID:</TableHeader>
                 					<TableColumn>9095391</TableColumn>
               					</TableRow>
               					<TableRow>
                 					<TableHeader>PIN:</TableHeader>
                 					<TableColumn>189704</TableColumn>
               					</TableRow>
              				</Table>
               			</Column>
               		</Row>
            	</Panel>
      		</Panel>
			);
	}
});
module.exports = PhoneAndPin;