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
                            <th>hs/kill</th>
                            <th>hs/min</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Weapon each={ this.weapons }></Weapon>
                    </tbody>
                    <script>
                        //TODO(put array with weapons here)
                        this.weapons = [];
                    </script>
                </table>
            </div>
        </div>
    </div>
</Playerstatstable>
