import $ from 'jquery'

const LOCAL  = 'http://localhost/API/Public/';
const REMOTE = 'http://139.196.210.223:81/';

export const query = function(api_name, params, callback) {

  var api_url = REMOTE + '?service=' + api_name;

  $.ajax({
    url: api_url,
    method: 'POST',
    cache: false,
    data: params,
    success: function(r) {
      try {
        if (r.ret == 400) {
          console.log(r.msg);
          return;
        }
        callback(r);
        console.log(api_name, params, r);
      } catch (e) {
        // alert(e);
        // console.log(e);
        console.log(e);
      }
    }
  })
};
