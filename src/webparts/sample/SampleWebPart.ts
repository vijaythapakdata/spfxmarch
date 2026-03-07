import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'SampleWebPartStrings';
import Sample from './components/Sample';
import { ISampleProps } from './components/ISampleProps';
import GetChoiceValueClassApi from '../../Service/ChoiceServiceApi';

export interface ISampleWebPartProps {
  description: string;
}

export default class SampleWebPart extends BaseClientSideWebPart<ISampleWebPartProps> {

 private choiceClasVal:GetChoiceValueClassApi|undefined
 protected async onInit(): Promise<void> {
this.choiceClasVal=new GetChoiceValueClassApi(this.context);
return super.onInit();
 }

  public async render(): Promise<void> {
    const element: React.ReactElement<ISampleProps> = React.createElement(
      Sample,
      {
       context:this.context,
       siteurl:this.context.pageContext.web.absoluteUrl,
       departmentoptions:await this.choiceClasVal?.getDropdownValues(this.context.pageContext.web.absoluteUrl,"Department"),
       genderoptions:await this.choiceClasVal?.getDropdownValues(this.context.pageContext.web.absoluteUrl,"Gender"),
       skillsoptions:await this.choiceClasVal?.getDropdownValues(this.context.pageContext.web.absoluteUrl,"Skills"),
       cityoptions:await this.choiceClasVal?.LookuValues(),
      }
    );

    ReactDom.render(element, this.domElement);
  }
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
