import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { ITag } from "@fluentui/react/lib/Pickers";

import OptionSet, { IOptionSetProps, optionTypes } from "./OptionSet";

initializeIcons();

export default {
  title: "Components/Organisms/OptionSet",
  component: OptionSet,
  parameters: {
    componentSubtitle:
      "An OptionSet/MultiSelectOptionSet/TwoOptions component that displays the options alphabetically horizontally"
  },
  argTypes: {
    options: { type: { required: true }, control: false },
    selected: { type: { required: true }, control: false },
    onChange: { action: "Change" }
  }
} as ComponentMeta<typeof OptionSet>;

const options: ITag[] = [
  { key: "key1", name: "Value 1" },
  { key: "key2", name: "Value 2" },
  { key: "key3", name: "Value 3" },
  { key: "key4", name: "Value 4" },
  { key: "key5", name: "Value 5" }
];

const Template: ComponentStory<typeof OptionSet> = (args: IOptionSetProps) => (
  <OptionSet {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Invisible = Template.bind({});
Invisible.args = { visible: false };

export const Options = Template.bind({});
Options.args = { options };

const lotsOfOptions: ITag[] = [];

for (let i = 0; i < 100; i += 1) {
  lotsOfOptions.push({ key: i, name: `Value ${i}` });
}

export const LotsOfOptions = Template.bind({});
LotsOfOptions.args = { options: lotsOfOptions };

export const MultiSelect = Template.bind({});
MultiSelect.args = { options, optionType: optionTypes.MultiSelect };

export const TwoOptions = Template.bind({});
TwoOptions.args = { optionType: optionTypes.TwoOptions };

export const Value = Template.bind({});
Value.args = {
  selected: [{ key: "key1", name: "Value 1" }]
};

export const MultipleValues = Template.bind({});
MultipleValues.args = {
  optionType: optionTypes.MultiSelect,
  selected: [
    { key: "key1", name: "Value 1" },
    { key: "key2", name: "Value 2" },
    { key: "key3", name: "Value 3" }
  ]
};

export const TwoOptionsValue = Template.bind({});
TwoOptionsValue.args = {
  optionType: optionTypes.TwoOptions,
  options: [
    { key: "key1", name: "Value 1" },
    { key: "key2", name: "Value 2" }
  ],
  selected: [{ key: "key1", name: "Value 1" }]
};
