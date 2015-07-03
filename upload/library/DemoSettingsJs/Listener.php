<?php
class DemoSettingsJs_Listener
{
	public static function templateCreate(&$templateName, array &$params, XenForo_Template_Abstract $template)
	{
		$xenOptions = XenForo_Application::get('options');

		$newSettings = array(
			'size' => '12',
			'color' => XenForo_Template_Helper_Core::styleProperty("secondaryDarker"),
			'boardTitle' => $xenOptions->boardTitle
		);

		$params['demosettingsjs_data'] = $newSettings;
	}
}
//Zend_Debug::dump($abc);