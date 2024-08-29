{
  "_$ver": 1,
  "_$id": "vj27ty62",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "77efc593-71cd-4ec4-814b-3d6ddc4f69bc",
      "scriptPath": "../src/playScript.ts",
      "ball": null
    }
  ],
  "_$child": [
    {
      "_$id": "8o2ao48p",
      "_$type": "Sprite",
      "name": "ballContainer",
      "width": 1920,
      "height": 1080
    },
    {
      "_$id": "9hcizcdy",
      "_$type": "Image",
      "name": "assemableContainer",
      "x": 645,
      "y": 155,
      "width": 630,
      "height": 630,
      "_mouseState": 2,
      "centerX": 0,
      "centerY": -70,
      "skin": "res://cb127771-906e-4e43-9913-6d8b02864cde",
      "sizeGrid": "30,30,30,30,0",
      "color": "#ffffff",
      "_$child": [
        {
          "_$id": "d31gwxjo",
          "_$type": "Sprite",
          "name": "Sprite",
          "x": 15,
          "y": 15,
          "width": 600,
          "height": 600,
          "_gcmds": [
            {
              "_$type": "DrawLineCmd",
              "fromX": 0,
              "fromY": 200,
              "toX": 600,
              "toY": 200,
              "lineWidth": 4,
              "lineColor": "rgba(160, 160, 160, 1)"
            },
            {
              "_$type": "DrawLineCmd",
              "fromX": 0,
              "fromY": 400,
              "toX": 600,
              "toY": 400,
              "lineWidth": 4,
              "lineColor": "rgba(160, 160, 160, 1)"
            },
            {
              "_$type": "DrawLineCmd",
              "fromX": 200,
              "fromY": 0,
              "toX": 200,
              "toY": 600,
              "lineWidth": 4,
              "lineColor": "rgba(160, 160, 160, 1)"
            },
            {
              "_$type": "DrawLineCmd",
              "fromX": 400,
              "fromY": 0,
              "toX": 400,
              "toY": 600,
              "lineWidth": 4,
              "lineColor": "rgba(160, 160, 160, 1)"
            }
          ]
        },
        {
          "_$id": "x8gli0wg",
          "_$type": "Image",
          "name": "leftPipe",
          "x": -196,
          "y": 6,
          "width": 200,
          "height": 200,
          "skin": "res://4cb61f98-98ec-45be-be34-a14ed251f6fd",
          "useSourceSize": true,
          "color": "#ffffff",
          "_$child": [
            {
              "_$id": "271xlazp",
              "_$type": "Image",
              "name": "Image",
              "x": 68,
              "y": 68,
              "width": 64,
              "height": 64,
              "centerX": 0,
              "centerY": 0,
              "skin": "res://7eac5a53-4c72-46a7-8a32-f2d161193ac5",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "3yf37st4",
          "_$type": "Image",
          "name": "rightPipe",
          "x": 624,
          "y": 404,
          "width": 200,
          "height": 200,
          "skin": "res://4cb61f98-98ec-45be-be34-a14ed251f6fd",
          "useSourceSize": true,
          "color": "#ffffff",
          "_$child": [
            {
              "_$id": "uk0g5y3y",
              "_$type": "Image",
              "name": "Image",
              "x": 68,
              "y": 68,
              "width": 64,
              "height": 64,
              "centerX": 0,
              "centerY": 0,
              "skin": "res://7eac5a53-4c72-46a7-8a32-f2d161193ac5",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        }
      ]
    },
    {
      "_$id": "0oab5qfn",
      "_$type": "List",
      "name": "toolList",
      "x": 210,
      "y": 810,
      "width": 1500,
      "height": 250,
      "_mouseState": 2,
      "bottom": 20,
      "centerX": 0,
      "itemTemplate": {
        "_$ref": "u614tkv0",
        "_$tmpl": "itemRender"
      },
      "repeatX": 6,
      "repeatY": 1,
      "_$child": [
        {
          "_$id": "u614tkv0",
          "_$type": "Box",
          "name": "item",
          "width": 250,
          "height": 250,
          "_$child": [
            {
              "_$id": "y0iub18r",
              "_$type": "Image",
              "name": "Image",
              "width": 250,
              "height": 250,
              "skin": "res://cb127771-906e-4e43-9913-6d8b02864cde",
              "sizeGrid": "30,30,30,30,0",
              "color": "#ffffff"
            },
            {
              "_$id": "ganriqfk",
              "_$type": "Image",
              "name": "pipeImage",
              "x": 25,
              "y": 25,
              "width": 200,
              "height": 200,
              "centerX": 0,
              "centerY": 0,
              "skin": "res://4cb61f98-98ec-45be-be34-a14ed251f6fd",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        }
      ]
    },
    {
      "_$id": "tqug7qj5",
      "_$type": "List",
      "name": "assemableList",
      "x": 660,
      "y": 160,
      "width": 600,
      "height": 600,
      "_mouseState": 2,
      "centerX": 0,
      "centerY": -80,
      "itemTemplate": {
        "_$ref": "3b361zlh",
        "_$tmpl": "itemRender"
      },
      "repeatX": 3,
      "repeatY": 3,
      "_$child": [
        {
          "_$id": "3b361zlh",
          "_$type": "Box",
          "name": "item",
          "width": 200,
          "height": 200,
          "_$child": [
            {
              "_$id": "67yj9v8n",
              "_$type": "Image",
              "name": "pipeImage",
              "width": 200,
              "height": 200,
              "useSourceSize": true,
              "color": "#ffffff"
            },
            {
              "_$id": "4s1f03hh",
              "_$prefab": "67675a85-c21f-4812-9be0-2598b897b7c9",
              "name": "Prefab",
              "active": true,
              "x": 0,
              "y": 0,
              "visible": true,
              "width": 200,
              "height": 200,
              "_$child": [
                {
                  "_$override": "i44bo88l",
                  "x": 0,
                  "y": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "_$id": "hnmb6206",
      "_$type": "Label",
      "name": "Label",
      "x": 760,
      "y": 64,
      "width": 400,
      "height": 50,
      "centerX": 0,
      "text": "关卡1",
      "fontSize": 40,
      "color": "#FFFFFF",
      "align": "center",
      "valign": "top",
      "padding": "0,0,0,0"
    },
    {
      "_$id": "he2pznfv",
      "_$type": "Image",
      "name": "pipe",
      "x": 25,
      "y": 36,
      "width": 200,
      "height": 200,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "visible": false,
      "skin": "res://b0e41eae-bb77-4097-8988-56bba4967d52",
      "color": "#ffffff"
    },
    {
      "_$id": "x1hyr2kv",
      "_$prefab": "21b0cb7d-d27c-4a41-9469-955b6b72c219",
      "name": "stopwatchPrefab",
      "active": true,
      "x": 1500,
      "y": 20,
      "visible": true,
      "right": 20,
      "top": 20
    },
    {
      "_$id": "oh8pqyry",
      "_$type": "CheckBox",
      "name": "checkSound",
      "x": 20,
      "y": 20,
      "width": 128,
      "height": 128,
      "_mouseState": 2,
      "left": 20,
      "top": 20,
      "stateNum": 2,
      "skin": "res://be692e77-1b2f-4678-acb7-a9e198cec2cb",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "top"
    }
  ]
}