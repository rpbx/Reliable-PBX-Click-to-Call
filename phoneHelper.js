// console.log("Phone Helper");

var us_code = {
  "201": {"State": "NJ", "Time": "EST"},
  "202": {"State": "DC", "Time": "EST"},
  "203": {"State": "CT", "Time": "EST"},
  "204": {"State": "MB", "Time": "CST"},
  "205": {"State": "AL", "Time": "CST"},
  "206": {"State": "WA", "Time": "PST"},
  "207": {"State": "ME", "Time": "EST"},
  "208": {"State": "ID", "Time": "MST"},
  "209": {"State": "CA", "Time": "PST"},
  "210": {"State": "TX", "Time": "CST"},
  "212": {"State": "NY", "Time": "EST"},
  "213": {"State": "CA", "Time": "PST"},
  "214": {"State": "TX", "Time": "CST"},
  "215": {"State": "PA", "Time": "EST"},
  "216": {"State": "OH", "Time": "EST"},
  "217": {"State": "IL", "Time": "CST"},
  "218": {"State": "MN", "Time": "CST"},
  "219": {"State": "IN", "Time": "EST"},
  "224": {"State": "IL", "Time": "CST"},
  "225": {"State": "LA", "Time": "CST"},
  "228": {"State": "MS", "Time": "CST"},
  "229": {"State": "GA", "Time": "EST"},
  "231": {"State": "MI", "Time": "EST"},
  "234": {"State": "OH", "Time": "EST"},
  "239": {"State": "FL", "Time": "EST"},
  "240": {"State": "MD", "Time": "EST"},
  "248": {"State": "MI", "Time": "EST"},
  "250": {"State": "BC", "Time": "PST"},
  "251": {"State": "AL", "Time": "CST"},
  "252": {"State": "NC", "Time": "EST"},
  "253": {"State": "WA", "Time": "PST"},
  "254": {"State": "TX", "Time": "CST"},
  "256": {"State": "AL", "Time": "CST"},
  "260": {"State": "IN", "Time": "EST"},
  "262": {"State": "WI", "Time": "CST"},
  "267": {"State": "PA", "Time": "EST"},
  "270": {"State": "KY", "Time": "EST"},
  "276": {"State": "VA", "Time": "EST"},
  "281": {"State": "TX", "Time": "CST"},
  "301": {"State": "MD", "Time": "EST"},
  "302": {"State": "DE", "Time": "EST"},
  "303": {"State": "CO", "Time": "MST"},
  "304": {"State": "WV", "Time": "EST"},
  "305": {"State": "FL", "Time": "EST"},
  "306": {"State": "SK", "Time": "MST"},
  "307": {"State": "WY", "Time": "MST"},
  "308": {"State": "NE", "Time": "CST"},
  "309": {"State": "IL", "Time": "CST"},
  "310": {"State": "CA", "Time": "PST"},
  "312": {"State": "IL", "Time": "CST"},
  "313": {"State": "MI", "Time": "EST"},
  "314": {"State": "MO", "Time": "CST"},
  "315": {"State": "NY", "Time": "EST"},
  "316": {"State": "KS", "Time": "CST"},
  "317": {"State": "IN", "Time": "EST"},
  "318": {"State": "LA", "Time": "CST"},
  "319": {"State": "IA", "Time": "CST"},
  "320": {"State": "MN", "Time": "CST"},
  "321": {"State": "FL", "Time": "EST"},
  "323": {"State": "CA", "Time": "PST"},
  "330": {"State": "OH", "Time": "EST"},
  "334": {"State": "AL", "Time": "CST"},
  "336": {"State": "NC", "Time": "EST"},
  "337": {"State": "LA", "Time": "CST"},
  "339": {"State": "MA", "Time": "EST"},
  "347": {"State": "NY", "Time": "EST"},
  "351": {"State": "MA", "Time": "EST"},
  "352": {"State": "FL", "Time": "EST"},
  "360": {"State": "WA", "Time": "PST"},
  "361": {"State": "TX", "Time": "CST"},
  "386": {"State": "FL", "Time": "EST"},
  "401": {"State": "RI", "Time": "EST"},
  "402": {"State": "NE", "Time": "CST"},
  "403": {"State": "AB", "Time": "MST"},
  "404": {"State": "GA", "Time": "EST"},
  "405": {"State": "OK", "Time": "CST"},
  "406": {"State": "MT", "Time": "MST"},
  "407": {"State": "FL", "Time": "EST"},
  "408": {"State": "CA", "Time": "PST"},
  "409": {"State": "TX", "Time": "CST"},
  "410": {"State": "MD", "Time": "EST"},
  "412": {"State": "PA", "Time": "EST"},
  "413": {"State": "MA", "Time": "EST"},
  "414": {"State": "WI", "Time": "CST"},
  "415": {"State": "CA", "Time": "PST"},
  "416": {"State": "ON", "Time": "EST"},
  "417": {"State": "MO", "Time": "CST"},
  "418": {"State": "QC", "Time": "EST"},
  "419": {"State": "OH", "Time": "EST"},
  "423": {"State": "TN", "Time": "CST"},
  "425": {"State": "WA", "Time": "PST"},
  "434": {"State": "VA", "Time": "EST"},
  "435": {"State": "UT", "Time": "MST"},
  "437": {"State": "ON", "Time": "EST"},
  "440": {"State": "OH", "Time": "EST"},
  "443": {"State": "MD", "Time": "EST"},
  "445": {"State": "PA", "Time": "EST"},
  "450": {"State": "QC", "Time": "EST"},
  "469": {"State": "TX", "Time": "CST"},
  "470": {"State": "GA", "Time": "EST"},
  "475": {"State": "CT", "Time": "EST"},
  "478": {"State": "GA", "Time": "EST"},
  "479": {"State": "AR", "Time": "CST"},
  "480": {"State": "AZ", "Time": "MST"},
  "484": {"State": "PA", "Time": "EST"},
  "501": {"State": "AR", "Time": "CST"},
  "502": {"State": "KY", "Time": "EST"},
  "503": {"State": "OR", "Time": "PST"},
  "504": {"State": "LA", "Time": "CST"},
  "505": {"State": "NM", "Time": "MST"},
  "506": {"State": "NB", "Time": "AST"},
  "507": {"State": "MN", "Time": "CST"},
  "508": {"State": "MA", "Time": "EST"},
  "509": {"State": "WA", "Time": "PST"},
  "510": {"State": "CA", "Time": "PST"},
  "512": {"State": "TX", "Time": "CST"},
  "513": {"State": "OH", "Time": "EST"},
  "514": {"State": "QC", "Time": "EST"},
  "515": {"State": "IA", "Time": "CST"},
  "516": {"State": "NY", "Time": "EST"},
  "517": {"State": "MI", "Time": "EST"},
  "518": {"State": "NY", "Time": "EST"},
  "519": {"State": "ON", "Time": "EST"},
  "520": {"State": "AZ", "Time": "MST"},
  "530": {"State": "CA", "Time": "PST"},
  "540": {"State": "VA", "Time": "EST"},
  "541": {"State": "OR", "Time": "PST"},
  "551": {"State": "NJ", "Time": "EST"},
  "559": {"State": "CA", "Time": "PST"},
  "561": {"State": "FL", "Time": "EST"},
  "562": {"State": "CA", "Time": "PST"},
  "563": {"State": "IA", "Time": "CST"},
  "567": {"State": "OH", "Time": "EST"},
  "570": {"State": "PA", "Time": "EST"},
  "571": {"State": "VA", "Time": "EST"},
  "573": {"State": "MO", "Time": "CST"},
  "574": {"State": "IN", "Time": "EST"},
  "575": {"State": "NM", "Time": "MST"},
  "580": {"State": "OK", "Time": "CST"},
  "585": {"State": "NY", "Time": "EST"},
  "586": {"State": "MI", "Time": "EST"},
  "601": {"State": "MS", "Time": "CST"},
  "602": {"State": "AZ", "Time": "MST"},
  "603": {"State": "NH", "Time": "EST"},
  "604": {"State": "BC", "Time": "PST"},
  "605": {"State": "SD", "Time": "CST"},
  "606": {"State": "KY", "Time": "EST"},
  "607": {"State": "NY", "Time": "EST"},
  "608": {"State": "WI", "Time": "CST"},
  "609": {"State": "NJ", "Time": "EST"},
  "610": {"State": "PA", "Time": "EST"},
  "612": {"State": "MN", "Time": "CST"},
  "613": {"State": "ON", "Time": "EST"},
  "614": {"State": "OH", "Time": "EST"},
  "615": {"State": "TN", "Time": "CST"},
  "616": {"State": "MI", "Time": "EST"},
  "617": {"State": "MA", "Time": "EST"},
  "618": {"State": "IL", "Time": "CST"},
  "619": {"State": "CA", "Time": "PST"},
  "620": {"State": "KS", "Time": "CST"},
  "623": {"State": "AZ", "Time": "MST"},
  "626": {"State": "CA", "Time": "PST"},
  "630": {"State": "IL", "Time": "CST"},
  "631": {"State": "NY", "Time": "EST"},
  "636": {"State": "MO", "Time": "CST"},
  "641": {"State": "IA", "Time": "CST"},
  "646": {"State": "NY", "Time": "EST"},
  "647": {"State": "ON", "Time": "EST"},
  "650": {"State": "CA", "Time": "PST"},
  "651": {"State": "MN", "Time": "CST"},
  "660": {"State": "MO", "Time": "CST"},
  "661": {"State": "CA", "Time": "PST"},
  "662": {"State": "MS", "Time": "CST"},
  "678": {"State": "GA", "Time": "EST"},
  "682": {"State": "TX", "Time": "CST"},
  "701": {"State": "ND", "Time": "CST"},
  "702": {"State": "NV", "Time": "PST"},
  "703": {"State": "VA", "Time": "EST"},
  "704": {"State": "NC", "Time": "EST"},
  "705": {"State": "ON", "Time": "EST"},
  "706": {"State": "GA", "Time": "EST"},
  "707": {"State": "CA", "Time": "PST"},
  "708": {"State": "IL", "Time": "CST"},
  "709": {"State": "NF", "Time": "AST"},
  "712": {"State": "IA", "Time": "CST"},
  "713": {"State": "TX", "Time": "CST"},
  "714": {"State": "CA", "Time": "PST"},
  "715": {"State": "WI", "Time": "CST"},
  "716": {"State": "NY", "Time": "EST"},
  "717": {"State": "PA", "Time": "EST"},
  "718": {"State": "NY", "Time": "EST"},
  "719": {"State": "CO", "Time": "MST"},
  "720": {"State": "CO", "Time": "MST"},
  "724": {"State": "PA", "Time": "EST"},
  "727": {"State": "FL", "Time": "EST"},
  "731": {"State": "TN", "Time": "CST"},
  "732": {"State": "NJ", "Time": "EST"},
  "734": {"State": "MI", "Time": "EST"},
  "740": {"State": "OH", "Time": "EST"},
  "754": {"State": "FL", "Time": "EST"},
  "757": {"State": "VA", "Time": "EST"},
  "760": {"State": "CA", "Time": "PST"},
  "763": {"State": "MN", "Time": "CST"},
  "765": {"State": "IN", "Time": "EST"},
  "770": {"State": "GA", "Time": "EST"},
  "773": {"State": "IL", "Time": "CST"},
  "774": {"State": "MA", "Time": "EST"},
  "775": {"State": "NV", "Time": "PST"},
  "780": {"State": "AB", "Time": "MST"},
  "781": {"State": "MA", "Time": "EST"},
  "785": {"State": "KS", "Time": "CST"},
  "786": {"State": "FL", "Time": "EST"},
  "787": {"State": "PR", "Time": "EST"},
  "801": {"State": "UT", "Time": "MST"},
  "802": {"State": "VT", "Time": "EST"},
  "803": {"State": "SC", "Time": "EST"},
  "804": {"State": "VA", "Time": "EST"},
  "805": {"State": "CA", "Time": "PST"},
  "806": {"State": "TX", "Time": "CST"},
  "807": {"State": "ON", "Time": "EST"},
  "808": {"State": "HI", "Time": "HST"},
  "810": {"State": "MI", "Time": "EST"},
  "812": {"State": "IN", "Time": "EST"},
  "813": {"State": "FL", "Time": "EST"},
  "814": {"State": "PA", "Time": "EST"},
  "815": {"State": "IL", "Time": "CST"},
  "816": {"State": "MO", "Time": "CST"},
  "817": {"State": "TX", "Time": "CST"},
  "818": {"State": "CA", "Time": "PST"},
  "819": {"State": "QC", "Time": "EST"},
  "828": {"State": "NC", "Time": "EST"},
  "830": {"State": "TX", "Time": "CST"},
  "831": {"State": "CA", "Time": "PST"},
  "832": {"State": "TX", "Time": "CST"},
  "835": {"State": "PA", "Time": "EST"},
  "843": {"State": "SC", "Time": "EST"},
  "845": {"State": "NY", "Time": "EST"},
  "847": {"State": "IL", "Time": "CST"},
  "848": {"State": "NJ", "Time": "EST"},
  "850": {"State": "FL", "Time": "EST"},
  "856": {"State": "NJ", "Time": "EST"},
  "857": {"State": "MA", "Time": "EST"},
  "858": {"State": "CA", "Time": "PST"},
  "859": {"State": "KY", "Time": "EST"},
  "860": {"State": "CT", "Time": "EST"},
  "862": {"State": "NJ", "Time": "EST"},
  "863": {"State": "FL", "Time": "EST"},
  "864": {"State": "SC", "Time": "EST"},
  "865": {"State": "TN", "Time": "CST"},
  "867": {"State": "YT&NT&NU", "Time": "PST"},
  "870": {"State": "AR", "Time": "CST"},
  "878": {"State": "PA", "Time": "EST"},
  "901": {"State": "TN", "Time": "CST"},
  "902": {"State": "NS&PE", "Time": "AST"},
  "903": {"State": "TX", "Time": "CST"},
  "904": {"State": "FL", "Time": "EST"},
  "905": {"State": "ON", "Time": "EST"},
  "906": {"State": "MI", "Time": "EST"},
  "907": {"State": "AK", "Time": "AKST"},
  "908": {"State": "NJ", "Time": "EST"},
  "909": {"State": "CA", "Time": "PST"},
  "910": {"State": "NC", "Time": "EST"},
  "912": {"State": "GA", "Time": "EST"},
  "913": {"State": "KS", "Time": "CST"},
  "914": {"State": "NY", "Time": "EST"},
  "915": {"State": "TX", "Time": "CST"},
  "916": {"State": "CA", "Time": "PST"},
  "917": {"State": "NY", "Time": "EST"},
  "918": {"State": "OK", "Time": "CST"},
  "919": {"State": "NC", "Time": "EST"},
  "920": {"State": "WI", "Time": "CST"},
  "925": {"State": "CA", "Time": "PST"},
  "928": {"State": "AZ", "Time": "MST"},
  "931": {"State": "TN", "Time": "CST"},
  "936": {"State": "TX", "Time": "CST"},
  "937": {"State": "OH", "Time": "EST"},
  "940": {"State": "TX", "Time": "CST"},
  "941": {"State": "FL", "Time": "EST"},
  "949": {"State": "CA", "Time": "PST"},
  "952": {"State": "MN", "Time": "CST"},
  "954": {"State": "FL", "Time": "EST"},
  "956": {"State": "TX", "Time": "CST"},
  "959": {"State": "CT", "Time": "EST"},
  "970": {"State": "CO", "Time": "MST"},
  "971": {"State": "OR", "Time": "PST"},
  "972": {"State": "TX", "Time": "CST"},
  "973": {"State": "NJ", "Time": "EST"},
  "978": {"State": "MA", "Time": "EST"},
  "979": {"State": "TX", "Time": "CST"},
  "980": {"State": "NC", "Time": "EST"},
  "985": {"State": "LA", "Time": "CST"},
  "989": {"State": "MI", "Time": "EST"}
};

var phoneNumberRegEx = /(?:^|[\s\(])(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?!\.\S|[^\s\)x\.])/
var phoneNumberRegExMatcher = new RegExp(phoneNumberRegEx)

var linkClass = "phone-helper";

linkPhoneNumbers(document.body);
document.body.addEventListener("DOMNodeInserted", OnNodeInserted, false);

function linkPhoneNumbers(node) {
    for (var i = 0; i < node.childNodes.length; ++i) {
        var child = node.childNodes[i];
        if (child.nodeName == "SCRIPT" || child.nodeName == "NOSCRIPT"
                || child.nodeName == "OBJECT" || child.nodeName == "EMBED"
                || child.nodeName == "APPLET" || child.nodeName == "IFRAME") {
            continue;
        }
        if (child.nodeName == "DIV") {
          // console.log("div");
          if (child.hasAttribute("contenteditable")) {
            // console.log("editable div");
            continue;
          }
          // if (child.hasAttribute("data-msg-id")) {
          //   // console.log("data-msg-id div");
          //   continue;
          // }
        }
        if (child.parentElement && (child.parentElement.nodeName == "DIV" &&
          child.parentElement.hasAttribute("contenteditable")) ||
          (child.parentElement.parentElement &&
            child.parentElement.parentElement.nodeName == "DIV" &&
            child.parentElement.parentElement.hasAttribute("contenteditable"))) {
            // console.log("parent contenteditable");
            continue;
        }

        if (child.childNodes.length > 0) {
            linkPhoneNumbers(child);
        } else if (child.nodeType == 3) {
            var phoneNumbers = phoneNumberRegExMatcher.exec(child.nodeValue);
            if (phoneNumbers) {
                var nextChild = child.nextSibling;
                if (nextChild && nextChild.class == linkClass) {
                    continue;
                }

                var phoneNumber = (phoneNumbers[1] ? phoneNumbers[1] : phoneNumbers[2]) + phoneNumbers[3] + phoneNumbers[4];
                var formattedPhoneNumber = "(" + (phoneNumbers[1] ? phoneNumbers[1] : phoneNumbers[2]) + ") " + phoneNumbers[3] + "-" + phoneNumbers[4];

                var stripped = phoneNumber;

                var title = "";

                //stripped = stripped.replace(/[\.-]+/g,"");
                // console.log("stripped: " + stripped + ", " + stripped.substring(0,3));
                if (stripped.length == 10) {
                  // US number
                  var code = us_code[stripped.substring(0,3)];
                  if (code) {
                    title = "State: " + code.State + " Time: " + code.Time;
                  } else {
                    title = "Toll Free";
                  }
                } else if (stripped.length == 11 && stripped.startsWith == 1 ){
                  // US number
                  var code = us_code[stripped.substring(1,4)];
                  if (code) {
                    title = "State: " + code.State + " Time: " + code.Time;
                  } else {
                    title = "Toll Free";
                  }
                } else if (stripped.length == 12 && stripped.startsWith == +1 ){
                  // US number
                  var code = us_code[stripped.substring(2,5)];
                  if (code) {
                    title = "State: " + code.State + " Time: " + code.Time;
                  } else {
                    title = "Toll Free";
                  }
                } else {
                  title = "International";
                }

                var image = document.createElement("img");
                image.src = chrome.runtime.getURL("logo48.png");
                image.style.width = "1em";
                image.style.height = "1em";

                var link = document.createElement("a");
                link.href = "tel:" + phoneNumber;
                link.title = title;
                link.class = linkClass;
                link.style.marginLeft = "0.25em";
                link.appendChild(image);

                child.splitText(phoneNumbers.index + phoneNumbers[0].length);
                node.insertBefore(link, node.childNodes[++i]);
                
            }
        }
    }
}

var linking = false;

function OnNodeInserted(event) {
    if (linking) return;
    linking = true;
    linkPhoneNumbers(event.target)
    linking = false;
}
