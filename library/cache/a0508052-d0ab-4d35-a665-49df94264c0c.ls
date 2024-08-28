{
  "_$ver": 1,
  "_$id": "eptxhi8u",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "350f24e1-fd18-4c69-9d1e-1ca3e3d98483",
      "scriptPath": "../src/DialogFailScript.ts"
    }
  ],
  "_$child": [
    {
      "_$id": "dhfjk150",
      "_$type": "Box",
      "name": "background",
      "width": 1920,
      "height": 1080,
      "alpha": 0.25,
      "centerX": 0,
      "centerY": 0,
      "bgColor": "rgba(36, 133, 180, 1)"
    },
    {
      "_$id": "bb82vr9r",
      "_$type": "Dialog",
      "name": "Dialog",
      "width": 1920,
      "height": 1080,
      "_mouseState": 2,
      "centerX": 0,
      "centerY": 0,
      "isModal": true,
      "_$child": [
        {
          "_$id": "82913h95",
          "_$type": "Image",
          "name": "Image",
          "x": 710,
          "y": 290,
          "width": 500,
          "height": 300,
          "centerX": 0,
          "centerY": -100,
          "skin": "res://cb127771-906e-4e43-9913-6d8b02864cde",
          "sizeGrid": "30,30,30,30,0",
          "color": "#ffffff"
        },
        {
          "_$id": "d2vhh9yu",
          "_$type": "Label",
          "name": "Label",
          "x": 710,
          "y": 415,
          "width": 500,
          "height": 50,
          "centerX": 0,
          "centerY": -100,
          "text": "管道连接失败",
          "fontSize": 55,
          "color": "rgba(172, 7, 26, 1)",
          "italic": true,
          "underline": true,
          "align": "center",
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "yxn75eel",
          "_$type": "Button",
          "name": "btnClose",
          "x": 864,
          "y": 470,
          "width": 192,
          "height": 100,
          "_mouseState": 2,
          "centerX": 0,
          "centerY": -20,
          "skin": "res://8426ca52-3079-43fb-8d82-ba0215847777",
          "label": "关闭",
          "labelSize": 52,
          "labelAlign": "center",
          "labelVAlign": "middle"
        }
      ]
    }
  ]
}