# lazypwny751

![200](https://http.cat/images/200.jpg)

# mp4 to gif

```sh
ffmpeg -i input.mp4 -vf "fps=45,palettegen" output.png
ffmpeg -i input.mp4 -i output.png -filter_complex "fps=45[x];[x][1:v]paletteuse" output.gif
```
