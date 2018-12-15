export function currDate(){
	let d=new Date();
	return  d.getFullYear()+'-'+((d.getMonth()+1)>9?(d.getMonth()+1):'0'+(d.getMonth()+1))+'-'+(d.getDate()>9?d.getDate():'0'+d.getDate());
}
//最近10天
export function currTenDays(){
	let dataStramp=(new Date()).getTime()-1000*3600*24*9;
	let d=new Date(dataStramp);
	return  d.getFullYear()+'-'+((d.getMonth()+1)>9?(d.getMonth()+1):'0'+(d.getMonth()+1))+'-'+(d.getDate()>9?d.getDate():'0'+d.getDate());
}
