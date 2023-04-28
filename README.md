# Lodgify Test - Marc Carranza

## **Make it run** 👟

- Install the project dependencies with `npm install`.
- Once installed, execute `npm run dev` or `npm run serve` on your terminal and click on the URL once it´s compiled.

## Libraries 📚

- Preact
- Typescript

## Structure 🏗️

I've tried to atomize the code as much as possible while keeping it tidy and manageable, with a standard folder structure:

- Assets
- Components
- Routes
- Style
- Types

## Functionality 💽

Apart from the basic functionalities, I've implemented a generic error handler and loader when waiting for the request to be completed.

The request to the API is in **src/routes/home/index.tsx**.

### **Error Handler**

After some failed requested because the connection crashed, I made a basic error handler that shows a generic message, it can be tested by adding at line 33 of **src/routes/home/index.tsx**.:

```
throw Error
```

![](https://github.com/MarcCarranza/lodgify-test/blob/main/src/assets/error.png)

### **Loader**

You'll find the component **Loader**, which at first does nothing as the response time is too small to be seen. Commenting line 42 in the file **src/routes/home/index.tsx**:

```
// setLoading(false);
```

and reloading the page the Loader will show up (but the data won't be shown).

![](https://raw.githubusercontent.com/MarcCarranza/lodgify-test/main/src/assets/load.gif?token=GHSAT0AAAAAACB4SD5VXMDXE7XB7DFCP6QCZCL76NQ)

### **ProgressBar**

As it has it's own logic and animations the progress bar has been componentized, not really that sure on how legible is the function **getCompletedPercentage** but I felt that a nested _for_ is easier to understand than a nested _.forEach_

#

_If you have any questions not addressed here I'll be happy to answer them. I focused on what's requested trying to keep it simple and straightforward._ 🙂
