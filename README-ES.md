###### ❗CTRL+SHIFT+V =  VSCODE MD PREVIEW

</br>

# ![PickzelEngineLogo](https://i.imgur.com/cDEs2UC.png) Pickzel Engine por Joaquin Larroca
## Creacion 6/3/2022 Uruguay

</br>

</br>

## 📂  **Varbiales del motor** / opciones y variables
 **Setting** _Es un objeto_
  - **GameName** _El nombre que se muestra en el Titulo_
  - **Debug** _Muestra una cuadricula e indicaciones para ella_
  - **startScreen** _Segun el valor muestra un menu o no_
  - **JSFileName** _Es la ruta del archivo que ejecuta el motor(el archivo games.js es el valor por defecto)_
  - **audVolume** _Es el volumen al cual se va a reproducir el sonido de la funcion playAudio() puede tener un valor entre 0.0 y 1_

<br>

- **A0** a **J9** _Desde A0 a J9. Es una valor de cada pixel.(Prueba el modo debug para ver los numeros y letras)_

</br>

![PickzelEngineGridx10](https://i.imgur.com/mTSg0U3.png)

</br>

## 	📚 **Funciones personalizadas**

- **setPixelColor(A0,"#fff")**  _Puede poner un pixel desde A0 hasta J9 sin comillas y seguido con una coma. El segundo valor es el color que puede tener un valor RGB, RGBA Y HEX. El valor de color tiene que estar entre comillas_

<br>

- **setPixelImage(A0,"assets/example.png")**  _Puede poner un pixel desde A0 hasta J9 sin comillas y seguido con una coma. El segundo valor es la ruta de la imagen EJ: "assets/example.png" . El valor de image tiene que estar entre comillas_

<br>

- **playAudio(1,"assets/audio.wav")**  _El primer valor se le asigna al ID que puede ser del 1 al 5. sin comillas y seguido de una coma **(** Solo se puede reproducir 1 sonido por ID al mismo tiempo **)**.  El segundo es la ruta del archivo **.WAV**, **.MP3**, **.OGG**, **etc**. Tiene que estar entre comillas_

<br>

- **stopAudio(1)**  _Para el audio que se esta reproduciendo en la ID del 1 al 5. sin comillas_

<br>

- **showText("Hello",5)** _El primer valor se asigna al texto que se muestre. con comillas. El segundo valor para los segundos que se mostrara. Sin comillas_

<br>


## 	🏴‍☠️ **Errores encontrados**

  **1.** Al ejecutar el archivo HTML en el navegador como local _EJ: Chrome "file://"_. El arhivo se ejecutara de manera correcta pero no cargara ningun sonido y traera errores con el en la consola.
