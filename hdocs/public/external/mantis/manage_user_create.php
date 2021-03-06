<?php
# MantisBT - a php based bugtracking system

# MantisBT is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 2 of the License, or
# (at your option) any later version.
#
# MantisBT is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with MantisBT.  If not, see <http://www.gnu.org/licenses/>.

	/**
	 * @package MantisBT
	 * @copyright Copyright (C) 2000 - 2002  Kenzaburo Ito - kenito@300baud.org
	 * @copyright Copyright (C) 2002 - 2013  MantisBT Team - mantisbt-dev@lists.sourceforge.net
	 * @link http://www.mantisbt.org
	 */
	 /**
	  * MantisBT Core API's
	  */
	require_once( 'core.php' );

	require_once( 'email_api.php' );

	form_security_validate( 'manage_user_create' );

	auth_reauthenticate();
	access_ensure_global_level( config_get( 'manage_user_threshold' ) );

	$f_username        = gpc_get_string( 'username' );
	$f_realname        = gpc_get_string( 'realname', '' );
	$f_password        = gpc_get_string( 'password', '' );
	$f_password_verify = gpc_get_string( 'password_verify', '' );
	$f_email           = gpc_get_string( 'email', '' );
	$f_access_level    = gpc_get_string( 'access_level' );
	$f_protected       = gpc_get_bool( 'protected' );
	$f_enabled         = gpc_get_bool( 'enabled' );

	# check for empty username
	$f_username = trim( $f_username );
	if ( is_blank( $f_username ) ) {
		trigger_error( ERROR_EMPTY_FIELD, ERROR );
	}

	# Check the name for validity here so we do it before promting to use a
	#  blank password (don't want to prompt the user if the process will fail
	#  anyway)
	# strip extra space from real name
	$t_realname = string_normalize( $f_realname );
	user_ensure_name_valid( $f_username );
	user_ensure_realname_valid( $t_realname );
	user_ensure_realname_unique( $f_username, $f_realname );

	if ( $f_password != $f_password_verify ) {
		trigger_error( ERROR_USER_CREATE_PASSWORD_MISMATCH, ERROR );
	}

	$f_email = email_append_domain( $f_email );
	email_ensure_not_disposable( $f_email );

	if ( ( ON == config_get( 'send_reset_password' ) ) && ( ON == config_get( 'enable_email_notification' ) ) ) {
		# Check code will be sent to the user directly via email. Dummy password set to random
		# Create random password
		$t_seed = $f_email . $f_username;
		$f_password	= auth_generate_random_password( $t_seed );
	} else {
		# Password won't to be sent by email. It entered by the admin
		# Now, if the password is empty, confirm that that is what we wanted
		if ( is_blank( $f_password ) ) {
			helper_ensure_confirmed( lang_get( 'empty_password_sure_msg' ),
					 lang_get( 'empty_password_button' ) );
		}
	}

	# Don't allow the creation of accounts with access levels higher than that of
	# the user creating the account.
	access_ensure_global_level( $f_access_level );

	# Need to send the user creation mail in the tracker language, not in the creating admin's language
	# Park the current language name until the user has been created
	lang_push( config_get( 'default_language' ) );

	# create the user
	$t_admin_name = user_get_name( auth_get_current_user_id() );
	$t_cookie = user_create( $f_username, $f_password, $f_email, $f_access_level, $f_protected, $f_enabled, $t_realname, $t_admin_name );

	# set language back to user language
	lang_pop();

	form_security_purge( 'manage_user_create' );

	if ( $t_cookie === false ) {
		$t_redirect_url = 'manage_user_page.php';
	} else {
		# ok, we created the user, get the row again
		$t_user_id = user_get_id_by_name( $f_username );
		$t_redirect_url = 'manage_user_edit_page.php?user_id=' . $t_user_id;
	}

	html_page_top( null, $t_redirect_url );
?>

<br />
<div align="center">
<?php
	$t_access_level = get_enum_element( 'access_levels', $f_access_level );
	echo lang_get( 'created_user_part1' ) . ' <span class="bold">' . $f_username . '</span> ' . lang_get( 'created_user_part2' ) . ' <span class="bold">' . $t_access_level . '</span><br />';

	print_bracket_link( $t_redirect_url, lang_get( 'proceed' ) );
?>
</div>

<?php html_page_bottom();
