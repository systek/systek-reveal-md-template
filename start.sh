#!/bin/bash

./node_modules/.bin/reveal-md presentasjon.md \
    -w \
    --disable-auto-open \
    --theme theme/eika-presentation.css \
    --title: "Test for Fun" \
    --highlight-theme nord \
    --vertical-separator "<!--v-->"
