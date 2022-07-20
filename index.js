import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Filter,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { orderDataSource } from './data';
import { SampleBase } from './sample-base';
export class FilterMenu extends SampleBase {
  gridInstance;
  filterType = [{ text: 'Menu', value: 'Menu' }];
  filterSettings = { type: 'Menu' };
  fields = { text: 'text', value: 'value' };
  format = { type: 'datetime', format: 'M/d/y hh:mm a' };
  actionComplete = function (args) {
    if (args.requestType == 'filterafteropen') {
      if (args.filterModel.dlgDiv.querySelector('.e-numerictextbox')) {
        args.filterModel.dlgDiv.querySelector(
          '.e-numerictextbox'
        ).ej2_instances[0].format = '#';
      }
    }
  };

  render() {
    return (
      <div className="control-pane">
        <div className="control-section row">
          <GridComponent
            dataSource={orderDataSource}
            allowSorting={true}
            allowPaging={true}
            ref={(grid) => (this.gridInstance = grid)}
            pageSettings={{ pageSize: 12, pageCount: 5 }}
            allowFiltering={true}
            filterSettings={this.filterSettings}
            actionComplete={this.actionComplete}
            height="500"
          >
            <ColumnsDirective>
              <ColumnDirective
                field="OrderID"
                headerText="ID"
                width="120"
                textAlign="Right"
              ></ColumnDirective>
              <ColumnDirective
                field="CustomerName"
                headerText="Customer Name"
                width="120"
                textAlign="Right"
              ></ColumnDirective>
              <ColumnDirective
                type="boolean"
                field="IsImpacted"
                headerText="IsImpacted?"
                width="120"
                textAlign="Right"
              ></ColumnDirective>
              <ColumnDirective
                field="OrderDate"
                headerText="Order Date"
                width="130"
                format={this.format}
                textAlign="Right"
              />
              <ColumnDirective
                field="Freight"
                headerText="Freight"
                width="120"
                format="C2"
                textAlign="Right"
              />
              <ColumnDirective
                field="ShipCountry"
                headerText="Ship Country"
                width="150"
                textAlign="Right"
              ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Filter, Page, Sort]} />
          </GridComponent>
        </div>
      </div>
    );
  }
}

render(<FilterMenu />, document.getElementById('sample'));
