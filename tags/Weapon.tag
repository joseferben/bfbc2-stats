import { round10 } from 'round10';
<Weapon>
    <th scope="row">{ weapon.label }</th>
    <td>{ weapon.kills }</td>
    <td>{ weapon.deaths }</td>
    <td>{ weapon.hs }</td>
    <td>{ kd }</td>
    <td>{ hsk }</td>
    <script>
        const data = this.weapon;
        this._calculateRatio = function(dividend, divisor, tol) {
            if (dividend === 0 && divisor === 0) {
                return 'unavailable';
            }
            divisor = divisor === 0 ? dividend : divisor;
            return round10(dividend / divisor === Infinity || NaN ? 0 : dividend / divisor, tol);
        };

        this.kd = this._calculateRatio(data.kills, data.deaths, -1);
        this.hsk = this._calculateRatio(data.hs, data.kills, -1);
    </script>
</Weapon>
