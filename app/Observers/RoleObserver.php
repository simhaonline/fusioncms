<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Observers;

use App\Models\Role;

class RoleObserver
{
    /**
     * Listen to the Role created event.
     *
     * @param  Role  $role
     */
    public function saved(Role $role)
    {
        $role->syncPermissions(
            request()->get('permissions', [])
        );
    }
}
