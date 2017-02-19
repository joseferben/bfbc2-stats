import Weapon from './Weapon.tag';

<Playerstatstable>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>weapon</th>
                            <th>kills</th>
                            <th>deaths</th>
                            <th>hs</th>
                        </tr>            
                    </thead>
                    <tbody>
                        <tr each={ weapon in this.weapons } data-is="weapon"></tr>
                    </tbody>
                    <script>
                        this.weapons = opts.data.weapons;   
                    </script>
                </table>
            </div>
        </div>
    </div>
</Playerstatstable>
