/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { getRequestToken } from '@nextcloud/auth'
import Vue from 'vue'

import Profile from './views/Profile.vue'
import ProfileSections from './profile/ProfileSections.js'

// @ts-expect-error Script nonce required for webpack loading additional scripts
__webpack_nonce__ = btoa(getRequestToken() ?? '')

if (!window.OCA) {
	window.OCA = {}
}

if (!window.OCA.Core) {
	window.OCA.Core = {}
}
Object.assign(window.OCA.Core, { ProfileSections: new ProfileSections() })

const View = Vue.extend(Profile)

window.addEventListener('DOMContentLoaded', () => {
	new View().$mount('#content')
})
