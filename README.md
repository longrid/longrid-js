## LongGrid

Библиотек для создания сетки состоящий из рядов, колонок и элементов в них

Пример выходящего JSON

```
{
  "rows": [
    {
      "columns": [
        {
          "items": [],
          "width": 1,
          "id": 2
        },
        {
          "items": [
            {
              "id": 1,
              "content": "<p>hello</p>"
            }
          ],
          "width": 3,
          "id": 1
        }
      ],
      "id": 1,
      "maxWidth": 4,
      "itemsWidth": 3,
      "emptyWidth": 1
    },
    {
      "columns": [
        {
          "items": [],
          "width": 1,
          "id": 4
        },
        {
          "items": [
            {
              "id": 1,
              "content": "<p>1</p>"
            }
          ],
          "width": 2,
          "id": 1
        },
        {
          "items": [
            {
              "id": 1,
              "content": "\n            "
            }
          ],
          "width": 1,
          "id": 3
        }
      ],
      "id": 2,
      "maxWidth": 4,
      "itemsWidth": 3,
      "emptyWidth": 1
    }
  ],
  "container": "grid__container",
  "options": {
    "columns": 4,
    "defaultItem": "text"
  }
}
```