# Lodgify Test - Marc Carranza

## **Make it run** 👟

- Install the project dependencies with `npm install`.
- Once installed, execute `npm run dev` on your terminal and click on the URL once it´s compiled.
- For a production-like build, execute `npm build` and `npm run serve`.

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

After some failed requests because of an unreliable connection, I made a basic error handler which shows a generic message. It can be tested by adding:

```
throw Error
```

at line 33 of **src/routes/home/index.tsx**.

![](https://github.com/MarcCarranza/lodgify-test/blob/main/src/assets/error.png)

### **Loader**

You'll find the component **Loader**, which at first does nothing as the response time is too small to be seen. Commenting line 42 in the file **src/routes/home/index.tsx**:

```
// setLoading(false);
```

and then reloading the page will render the loader (but the data won't be shown).

![](https://github.com/MarcCarranza/lodgify-test/blob/main/src/assets/load.gif)

### **ProgressBar**

As it has it's own logic and animations the progress bar has been componentized, not really that sure on how legible is the function **getCompletedPercentage** but I felt that a nested _for_ is easier to understand than a nested _.forEach_

#

_If you have any questions not addressed here I'll be happy to answer them. I focused on what's requested trying to keep it simple and straightforward._ 🙂
