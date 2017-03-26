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
                            <th>k/d</th>
                            <th>hs/k</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr each={ weapon in opts.data } data-is="weapon"></tr>
                    </tbody>
                    <script>
                    </script>
                </table>
            </div>
        </div>
    </div>
    <script>
    </script>
</Playerstatstable>
