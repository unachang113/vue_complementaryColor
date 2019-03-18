import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el    : '#app',
        data: {
            baseColor: '',
            colorNum: 0
        },
        computed: {
            // 色相環の作成
            complementaryColor: function() {
                const rgb = hexToRGB(this.baseColor);
                // rgb値の最大値と最小値を求める
                const buf = Math.min(rgb.r,rgb.g,rgb.b) + Math.max(rgb.r,rgb.g,rgb.b);
                // rgb値の生成
                const complementaryRGB = {
                    r: buf - rgb.r,
                    g: buf - rgb.g,
                    b: buf - rgb.b
                };
                // hex値に変換したものを返す
                return rgbToHex(complementaryRGB);
            }
        }
    });

    /**
     * @param color
     * hex形式(string)をrgb値に変換
     */
    function hexToRGB(color) {
        const hexValue = color.split('');
        let r, g, b;

        if (color.length === 3) {
            r = parseInt(hexValue[0].toString() + hexValue[0].toString(), 16);
            g = parseInt(hexValue[1].toString() + hexValue[1].toString(), 16);
            b = parseInt(hexValue[2].toString() + hexValue[2].toString(), 16);
        }
        else if (color.length === 6) {
            r = parseInt(hexValue[0].toString() + hexValue[1].toString(), 16);
            g = parseInt(hexValue[2].toString() + hexValue[3].toString(), 16);
            b = parseInt(hexValue[4].toString() + hexValue[5].toString(), 16);
        }

        return {r, g, b};
    };
    /**
     * @param color
     * rgb形式(object)をhexに変換
     */
    function rgbToHex(color) {
        const r = color.r.toString(16);
        const g = color.g.toString(16);
        const b = color.b.toString(16);
        return r + g + b;
    };

});
