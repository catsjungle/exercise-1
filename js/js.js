// JavaScript Document
window.onload=function(){
	//淘宝搜索选项卡
	var oDiv1=document.getElementById('block1');
	var oLis=oDiv1.getElementsByTagName('li');
	var oForm=oDiv1.getElementsByTagName('form')[0];
	
	var Urls=["http://www.baidu.com","http://www.jd.com","http://www.qq.com"];
	for(var i=0;i<oLis.length;i++)
	{
		oLis[i].index=i;
		oLis[i].onclick=function(){
			for(var i=0;i<oLis.length;i++)
			{
				oLis[i].className='';
			}
			this.className='active';
			oForm.action="http://www.jd.com";
		}
	}	
	//京东焦点图
	var oDiv2=document.getElementById('picTurn');
	var imgLi=oDiv2.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var imgNumLi=oDiv2.getElementsByTagName('ul')[1].getElementsByTagName('li');
	for(var i=0;i<imgNumLi.length;i++)
	{
		imgNumLi[i].index=i;
		imgNumLi[i].onmouseover=function(){
			for(var i=0;i<imgNumLi.length;i++)
			{
				imgLi[i].style.display='none';
				imgNumLi[i].className='';
			}
			imgLi[this.index].style.display='block';
			this.className='cur';
		}
	}
	//月历
	var oDiv3=document.getElementById('month');
	var mLi=oDiv3.getElementsByTagName('li');
	var mArr=[
				"1月的节日有元旦",
				"2月的节日有春节",
				"3月的节日有植树节、妇女节",
				"4月节日有愚人节",
				"5月节日有劳动节",
				"6月节日有儿童节",
				"7月节日有七夕节",
				"8月节日有建军节",
				"9月节日有教师节",
				"10月节日有国庆节",
				"11月节日有光棍节",
				"12月节日有冬至"
			];
	var oDivText=oDiv3.getElementsByTagName('div')[0];
	
	for(var i=0;i<mLi.length;i++)
	{
		mLi[i].index=i;
		mLi[i].onmouseover=function(){
			for(var i=0;i<mLi.length;i++)
			{
				mLi[i].className='';
			}
			this.className='stop';
			//alert(oDivText.innerHTML)
			oDivText.innerHTML = mArr[this.index];
		}
	}
	//中间大选项卡
	var oDiv4=document.getElementById('block3');
	var oTabs=oDiv4.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var oBigBox=oDiv4.getElementsByTagName('ul')[1].getElementsByTagName('li');
	for(var i=0;i<oTabs.length;i++)
	{
		oTabs[i].index=i;
		oTabs[i].onclick=function(){
			for(var i=0;i<oTabs.length;i++)
			{
				oTabs[i].className='';
				oBigBox[i].style.display='none';
			}
			this.className='now';
			oBigBox[this.index].style.display='block';
		}
	}
	//模拟多选框
	var oCheckbox=document.getElementById('checkBox');
	var oSpan=oCheckbox.getElementsByTagName('span');
	var oBtn1=oCheckbox.getElementsByTagName('input')[0];
	var oBtn2=oCheckbox.getElementsByTagName('input')[1];
	var oBtn3=oCheckbox.getElementsByTagName('input')[2];
	for(var i=0;i<oSpan.length;i++)
	{
		oSpan[i].onclick=function(){
			if(this.className=='check')
			{
				this.className='';
			}else
			{
				this.className='check'
			}
		}
	}
	oBtn1.onclick=function(){
		for(var i=0;i<oSpan.length;i++)
		{
			oSpan[i].className='check';
		}
	}
	oBtn2.onclick=function(){
		for(var i=0;i<oSpan.length;i++)
		{
			oSpan[i].className='';
		}
	}
	oBtn3.onclick=function(){
		for(var i=0;i<oSpan.length;i++)
		{
			if(oSpan[i].className=='check')
			{
				oSpan[i].className='';
			}else
			{
				oSpan[i].className='check'
			}
		}
	}
	//模拟单选框
	var radioBox=document.getElementById('radioBox');
	var rSpan=radioBox.getElementsByTagName('span');
	for(var i=0;i<rSpan.length;i++)
	{
		rSpan[i].onclick=function(){
			for(var i=0;i<rSpan.length;i++)
			{
				rSpan[i].className='';
			}
			this.className='checked';
		}
	}
	
	//淘宝广告
	var oAdver=document.getElementById('adv');	
	var oAdvMenu=oAdver.getElementsByTagName('li');
	var oImg=oAdver.getElementsByTagName('img')[0];
	var oImgA=oImg.parentNode;
	var arr1=[	
				'http://www.baidu.com',
				'http://www.jd.com',
				'http://www.taobao.com',
				'http://www.blueidea.com',
				'http://www.zhinengshe.com',
				'http://bbs.zhinengshe.com',
				'http://www.qq.com',
				'http://888.qq.com',
				'http://www.chuangxp.com',
				'http://www.m18.com',
				'http://www.vipshop.com',
				'http://www.dangdang.com',
				'http://www.liuxiaofan.com',
				'http://www.163.com',
				'http://www.sina.com',
				'http://www.weibo.com'
			 ];
	var arr2=[
				'images/111.jpg',
				'images/222.jpg',
				'images/333.jpg',
				'images/444.jpg',
				'images/555.jpg',
				'images/666.jpg',
				'images/777.jpg',
				'images/888.jpg',
				'images/999.jpg',
				'images/aaa.jpg',
				'images/bbb.jpg',
				'images/ccc.jpg',
				'images/ddd.jpg',
				'images/eee.jpg',
				'images/fff.jpg',
				'images/000.jpg'	
	];
	for(var i=0;i<oAdvMenu.length;i++)
	{
		oAdvMenu[i].index=i;
		oAdvMenu[i].onmouseover=function(){
			for(var i=0;i<oAdvMenu.length;i++)
			{
				oAdvMenu[i].className='';
			}
			this.className='selected';
			oImg.src=arr2[this.index];
			oImgA.href=arr1[this.index];
		}
	}
}














