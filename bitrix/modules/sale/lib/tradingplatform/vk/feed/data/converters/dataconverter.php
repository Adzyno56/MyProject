<?php

namespace Bitrix\Sale\TradingPlatform\Vk\Feed\Data\Converters;

use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);

abstract class DataConverter
{
	const PAD_STRING = '_';
	const END_STRING = ' ...';
	
	protected $exportId;
	
	abstract public function convert($data);
	
	/**
	 * VK don't understand specialchars-quotes. Change them to the yolochki
	 *
	 * @param $str
	 * @return mixed
	 */
	protected static function convertQuotes($str)
	{
		if (strlen($str) > 0)
		{
//			check quotes
			$str = preg_replace(
				array('/"([^\s].*?[^\s])"/', '/&quot;([^\s].*?[^\s])&quot;/'),
				Loc::getMessage("SALE_VK_PRODUCT_LAQUO") . '$1' . Loc::getMessage("SALE_VK_PRODUCT_RAQUO"), $str
			);

//			check single quotes
			$str = preg_replace(
				array("/'([^\s].*?[^\s])'/", "/&apos;([^\s].*?[^\s])&apos;/"),
				Loc::getMessage("SALE_VK_PRODUCT_LAQUO_SINGLE") . '$1' . Loc::getMessage("SALE_VK_PRODUCT_RAQUO_SINGLE"),
				$str
			);

//			check inches
			$str = preg_replace(
				['/(\d+\s*)(")/', '/(\d+\s*)(&quot;)/'],
				'$1' . Loc::getMessage('SALE_VK_INCH_NEW'), $str
			);
		}
		
		return $str;
	}
	
	private static $specialCharsLength = [
//		commented chars has no effect on the length
//		'"' => [
//			'count' => 5,
//			'regexp' => '"',
//		],
		'&' => [
			'count' => 5,
			'regexp' => '&',
		],
		'\\' => [
			'count' => 6,
			'regexp' => '\\\\',
		],
//		'\'' => [
//			'count' => 5,
//			'regexp' => '\\\'',
//		],
		'>' => [
			'count' => 4,
			'regexp' => '>',
		],
		'<' => [
			'count' => 4,
			'regexp' => '<',
		],
//		',' => [
//			'count' => 5,
//			'regexp' => ',',
//		],
		'!' => [
			'count' => 5,
			'regexp' => '!',
		],
		'$' => [
			'count' => 6,
			'regexp' => '$',
		],
//		'�' => [
//			'count' => 7,
//			'regexp' => '�',
//		],
	];
	
	protected static function matchLength($string)
	{
//		base length
		$length = strlen($string);

//		construct regexp for find all special chars
		$regexp = '';
		foreach (self::$specialCharsLength as $char)
		{
			$regexp .= $char['regexp'];
		}
		$regexp = '/[' . $regexp . ']/';
		preg_match_all($regexp, $string, $matches);

//		correct length by special chars
		foreach ($matches[0] as $m)
		{
			$length += self::$specialCharsLength[$m]['count'] - 1; //once already matches
		}
		
		return $length;
	}
	
	/**
	 * Add placeholders to the string
	 *
	 * @param $string
	 * @param $currLength
	 * @param $needLength
	 * @return string
	 */
	protected static function extendString($string, $currLength, $needLength)
	{
		if ($currLength >= $needLength)
		{
			return $string;
		}
		
		return self::mb_str_pad($string, $needLength, self::PAD_STRING);
	}
	
	protected static function mb_str_pad($string, $padLength, $padString = " ", $padType = STR_PAD_RIGHT)
	{
		if (method_exists("\Bitrix\Main\Text\UtfSafeString", "pad"))
		{
			return \Bitrix\Main\Text\UtfSafeString::pad($string, $padLength, $padString, $padType);
		}
		else
		{
			$newPadLength = \Bitrix\Main\Text\BinaryString::getLength($string) - strlen($string) + $padLength;
			
			return str_pad($string, $newPadLength, $padString, $padType);
		}
	}
	
	/**
	 * Crop string by special chars length
	 *
	 * @param $string
	 * @param $currLength
	 * @param $needLength
	 * @return string
	 */
	protected static function reduceString($string, $currLength, $needLength)
	{
		if ($currLength <= $needLength)
		{
			return $string;
		}
		
		$cropLength = $currLength - $needLength + strlen(self::END_STRING);
		$substrLength = strlen($string) - $cropLength;
		
//		if so more spechialchars, can't match correct new length.
//		Use hack and find minimal 100% correct length
		if($substrLength <= 0 )
		{
			$maxSpecialCharLength = 1;
			foreach(self::$specialCharsLength as $char)
			{
				$maxSpecialCharLength = max($maxSpecialCharLength, $char['count']);
			}
			
			$substrLength = floor($needLength / $maxSpecialCharLength);
		}
		
		return substr($string, 0, $substrLength) . self::END_STRING;
	}
}


