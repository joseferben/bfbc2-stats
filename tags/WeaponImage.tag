import ImageMapper from '../src/ImageMapper.js';

<WeaponImage>
    <div class="weapon-icon">
        <img src="{ imageUrl }"></img>
    </div>
    <script>
        this._getImageUrl = (label) => {
            const fileName = ImageMapper.mapToFileName(label);
            return require(`file-loader!../images/weapons/${fileName}.png`);
        }
        this.imageUrl = this._getImageUrl(opts.label)
    </script>
</WeaponImage>
