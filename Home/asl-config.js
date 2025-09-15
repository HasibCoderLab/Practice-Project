/* Ajax Search Lite Configuration */
window.ASL = window.ASL || {};

window.ASL.wp_rocket_exception = "DOMContentLoaded";
window.ASL.ajaxurl = "https://btibd.com/wp-admin/admin-ajax.php";
window.ASL.backend_ajaxurl = "https://btibd.com/wp-admin/admin-ajax.php";
window.ASL.asl_url = "https://btibd.com/wp-content/plugins/ajax-search-lite/";
window.ASL.detect_ajax = 1;
window.ASL.media_query = 4777;
window.ASL.version = 4777;
window.ASL.pageHTML = "";
window.ASL.additional_scripts = [];
window.ASL.script_async_load = false;
window.ASL.init_only_in_viewport = true;
window.ASL.font_url = "https://btibd.com/wp-content/plugins/ajax-search-lite/css/fonts/icons2.woff2";
window.ASL.highlight = {
  enabled: false,
  data: []
};
window.ASL.analytics = {
  method: 0,
  tracking_id: "",
  string: "?ajax_search={asl_term}",
  event: {
    focus: {
      active: true,
      action: "focus",
      category: "ASL",
      label: "Input focus",
      value: 1
    },
    search_start: {
      active: false,
      action: "search_start",
      category: "ASL",
      label: "Phrase: {phrase}",
      value: 1
    },
    search_end: {
      active: true,
      action: "search_end",
      category: "ASL",
      label: "{phrase} | {results_count}",
      value: 1
    },
    magnifier: {
      active: true,
      action: "magnifier",
      category: "ASL",
      label: "Magnifier clicked",
      value: 1
    },
    return: {
      active: true,
      action: "return",
      category: "ASL",
      label: "Return button pressed",
      value: 1
    },
    facet_change: {
      active: false,
      action: "facet_change",
      category: "ASL",
      label: "{option_label} | {option_value}",
      value: 1
    },
    result_click: {
      active: true,
      action: "result_click",
      category: "ASL",
      label: "{result_title} | {result_url}",
      value: 1
    }
  }
};
