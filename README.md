# Orba One

To integrate the Orba One SDK, follow this guide and use your
own API Key which you can obtained from the developer dashboard.

The integration of the Orba One Web SDK follows these simple steps:

1. Install the SDK through NPM / Yarn
2. Get an API Key
3. Render the Orba One verification button and handle the result

Additionally, there is a non package manager installation option. You can start using Orba One SDK library by directly by including it in your HTML file. Instructions can be found **[HERE](#using-the-script-tag-in-the-browser)**.

# 1. Install the SDK

```bash
# Yarn
yarn add @orbaone/core

# NPM
npm install --save @orbaone/core
```

# 2. Get an API Key

Orba One uses API keys to allow access to the API and show onboarded users in your dashboard. Login to your Orba One account and create a new Orba One API key here: [Developer Dashboard](https://vendor.orbaone.com).

# 3. Render the verification button

**Import the Orba One SDK**

```javascript
import { renderButton } from "@orbaone/core";
```

#### Example Usage 

```javascript
renderButton({
  apiKey: "exampleAPIKey",
  target: "#button",
  disableStyle: false,
  onSuccess: (data) => {console.log(data)},
  onError: (err) => {console.log(err),
  steps: ['welcome'],
})
```

#### renderButton(config) Options

| Parameter    | Type                 | Description                                      |
| ------------ | -------------------- | ------------------------------------------------ |
| target       | string or DOMElement | The DOM element you want to mount the button on. |
| apiKey       | string               | The OrbaOne Key you obtained from the dashboard. |
| disableStyle | boolean (optional)   | The OrbaOne Key you obtained from the dashboard. |
| onSuccess    | function             | Callback function after onboarding is complete.  |
| onError      | function             | Callback function if onboarding has failed.      |
| steps        | array                | Array of verification steps.                     |



## Using the script tag in the browser

Simply add to your main html file.
```htm
<script type="text/javascript" defer="true" src="path/to/file.js" />
```



#### Example Usage 

```html
<script type="text/javascript">
    OrbaOneVerifyCore.renderButton({
      apiKey: "exampleAPIKey",
      target: "#button",
      disableStyle: false,
      onSuccess: (data) => { console.log(data) },
      onError: (err) => { console.log(err) },
      steps: ['welcome']
    })
</script>
```

