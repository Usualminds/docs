# CSS text

## text shadow

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            @layer demo {
                .highlighted-text-shadow {
                    text-shadow:
      /* regular text-shadow */ 0 0.15ch 15px
                            var(--shadow),
                        /* text-shadow highlight */ 0 -2px 0 var(--highlight);
                }
            }

            @layer demo.support {
                :root {
                    --hue: 320; /* change me */
                    --bg: oklch(35% 0.3 var(--hue));
                    --text: oklch(85% 0.1 var(--hue));
                    --shadow: oklch(25% 0.2 var(--hue));
                    --highlight: oklch(98% 0.05 var(--hue));
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                }

                html {
                    block-size: 100%;
                    background-color: var(--bg);
                    color: var(--text);
                }

                body {
                    min-block-size: 100%;
                    font-family: system-ui, sans-serif;

                    display: grid;
                    place-content: center;
                    gap: 10vh;
                }

                h1 {
                    font-size: 15vi;
                    letter-spacing: -0.15ch;
                    line-height: 0.75;
                }

                small {
                    max-inline-size: 30ch;
                }
            }
        </style>
    </head>
    <body>
        <h1 class="highlighted-text-shadow">
            CSS<br />
            TEXT<br />
            SHADOW<br />
            HIGHLIGHT
        </h1>

        <small
            >That <code>2px</code> (almost) white highlight on the top of the
            text makes it seem as though there's a light source.</small
        >
    </body>
</html>

```
