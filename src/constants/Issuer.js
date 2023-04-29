const BINS_DATA = [
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "403660", "level": "", "type": "CREDIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "407586", "level": "BUSINESS", "type": "CREDIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "412702", "level": "INFINITE", "type": "CREDIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "418742", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "418743", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "418745", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "427873", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "467768", "level": "CORPORATE T&E", "type": "CREDIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "469665", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "469666", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "469667", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "470484", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "475175", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "475176", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Access Bank Plc", "brand": "VISA", "bin": "475177", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Access Bank Plc", "brand": "MASTERCARD", "bin": "517731", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "MASTERCARD", "bin": "519902", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "MASTERCARD", "bin": "522522", "level": "TITANIUM", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "MASTERCARD", "bin": "529820", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "MASTERCARD", "bin": "531931", "level": "PREPAID RELOADABLE", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "MASTERCARD", "bin": "536613", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "MASTERCARD", "bin": "557694", "level": "", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "MASTERCARD", "bin": "559447", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Access Bank Plc", "brand": "MAESTRO", "bin": "636088", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Caja Rural De Almeria Y Malaga", "brand": "VISA", "bin": "483953", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Citibank Nigeria Limited", "brand": "VISA", "bin": "485451", "level": "CORPORATE T&E", "type": "CREDIT" },
    { "issuer": "Citibank Nigeria Limited", "brand": "VISA", "bin": "486508", "level": "PURCHASING", "type": "CREDIT" },
    { "issuer": "Citibank Nigeria Limited", "brand": "MASTERCARD", "bin": "533031", "level": "CORPORATE CARD", "type": "CREDIT" },
    { "issuer": "Citibank Nigeria Limited", "brand": "MASTERCARD", "bin": "555060", "level": "CORPORATE PURCHASING", "type": "CREDIT" },
    { "issuer": "Citibank Nigeria Limited", "brand": "MASTERCARD", "bin": "555061", "level": "CORPORATE PURCHASING", "type": "CREDIT" },
    { "issuer": "Citibank Nigeria Limited", "brand": "MASTERCARD", "bin": "555062", "level": "CORPORATE PURCHASING", "type": "CREDIT" },
    { "issuer": "Cscbank S.a.l.", "brand": "MASTERCARD", "bin": "547638", "level": "BUSINESS", "type": "CREDIT" },
    { "issuer": "Cscbank S.a.l.", "brand": "MASTERCARD", "bin": "557669", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Diamond Bank", "brand": "MASTERCARD", "bin": "516491", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Diamond Bank", "brand": "MASTERCARD", "bin": "527678", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Diamond Bank", "brand": "MASTERCARD", "bin": "541042", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "Diamond Bank", "brand": "MASTERCARD", "bin": "553534", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "418547", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "427875", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "459262", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "496009", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "496021", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "496022", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "496023", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "496024", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Diamond Bank", "brand": "VISA", "bin": "496026", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Diamond Bank", "brand": "MASTERCARD", "bin": "519626", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "462153", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "512269", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "519789", "level": "PREPAID BUSINESS", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "528917", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "529751", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "529778", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "531224", "level": "CORPORATE", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "531498", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "531499", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "531504", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "531505", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "531667", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "531992", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "532968", "level": "CORPORATE", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "537010", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "537011", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "538115", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "548458", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "548712", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "411736", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "411737", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "468555", "level": "", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MAESTRO", "bin": "506122", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "404930", "level": "", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "427872", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "499908", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "499909", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "499910", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "408378", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "408379", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "408380", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "428602", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "VISA", "bin": "428603", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Ecobank Nigeria Plc", "brand": "MASTERCARD", "bin": "539948", "level": "", "type": "CREDIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "405030", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "410373", "level": "", "type": "CREDIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "446965", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "458792", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "458793", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "460053", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "460054", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "460055", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "VISA", "bin": "468219", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "MASTERCARD", "bin": "514585", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "MASTERCARD", "bin": "517897", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Fidelity Bank Plc", "brand": "MASTERCARD", "bin": "524271", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "427011", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "427012", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "427013", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "427014", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "427876", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "443893", "level": "CORPORATE T&E", "type": "CREDIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "457714", "level": "", "type": "CREDIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "470651", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "470652", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "470653", "level": "INFINITE", "type": "CREDIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "470654", "level": "CORPORATE T&E", "type": "CREDIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "VISA", "bin": "470655", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "MASTERCARD", "bin": "519510", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "MASTERCARD", "bin": "519878", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "MASTERCARD", "bin": "539923", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "MASTERCARD", "bin": "543338", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "MASTERCARD", "bin": "550542", "level": "", "type": "DEBIT" },
    { "issuer": "First Bank Nigeria Ltd.", "brand": "MAESTRO", "bin": "506105", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "400691", "level": "", "type": "CREDIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "416919", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "432226", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "462516", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "462517", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "467874", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "467875", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "485483", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "VISA", "bin": "485484", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "516005", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "519830", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "520725", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "521886", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "521973", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "524282", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "527699", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "533797", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "536337", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "First City Monument Bank Plc", "brand": "MASTERCARD", "bin": "542390", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "541569", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "VISA", "bin": "420319", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "VISA", "bin": "420320", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "VISA", "bin": "420321", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "VISA", "bin": "428222", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "VISA", "bin": "442176", "level": "", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "VISA", "bin": "445807", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "VISA", "bin": "464782", "level": "CORPORATE T&E", "type": "CREDIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "517455", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "522340", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "532732", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "533853", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "533856", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "539983", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "540746", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "540761", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "541508", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "552264", "level": "WORLD", "type": "CREDIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "553396", "level": "CORPORATE", "type": "CREDIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "553415", "level": "CORPORATE", "type": "CREDIT" },
    { "issuer": "Guaranty Trust Bank Plc", "brand": "MASTERCARD", "bin": "559754", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "512934", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "516195", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "517058", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "518304", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "523740", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "523776", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "528253", "level": "PREPAID RELOADABLE", "type": "DEBIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "528668", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "529863", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "537610", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Heritage Banking Company Ltd.", "brand": "MASTERCARD", "bin": "541099", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Interpayment Services Ltd.", "brand": "VISA", "bin": "474121", "level": "PREPAID TRAVEL MONEY", "type": "DEBIT" },
    { "issuer": "Jaiz Bank", "brand": "MASTERCARD", "bin": "553813", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Jaiz Bank", "brand": "MASTERCARD", "bin": "559934", "level": "PREPAID RELOADABLE", "type": "DEBIT" },
    { "issuer": "Keystone Bank", "brand": "VISA", "bin": "428500", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Keystone Bank", "brand": "VISA", "bin": "428501", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Keystone Bank", "brand": "VISA", "bin": "428502", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Keystone Bank", "brand": "VISA", "bin": "428503", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Keystone Bank", "brand": "VISA", "bin": "428504", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Keystone Bank", "brand": "VISA", "bin": "421201", "level": "", "type": "DEBIT" },
    { "issuer": "Keystone Bank", "brand": "VISA", "bin": "475186", "level": "", "type": "DEBIT" },
    { "issuer": "Keystone Bank", "brand": "MASTERCARD", "bin": "546778", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Keystone Bank", "brand": "MASTERCARD", "bin": "555940", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Maestro International", "brand": "MAESTRO", "bin": "571081", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Maestro International", "brand": "MAESTRO", "bin": "576880", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Maestro International", "brand": "MAESTRO", "bin": "579876", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Obi Petrol Card", "brand": "MAESTRO", "bin": "603948", "level": "", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "400830", "level": "", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "408407", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "408408", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "408409", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "408410", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "428225", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "469617", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "419710", "level": "", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "517054", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "523735", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "419225", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "419226", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "419227", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "419228", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "424226", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "427877", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "437360", "level": "CORPORATE T&E", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "458274", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "458301", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "458302", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "458478", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "458536", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "VISA", "bin": "472482", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "519908", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "519909", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "529539", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "536135", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "538752", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "539945", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "540648", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "546557", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "546894", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Polaris Bank", "brand": "MASTERCARD", "bin": "549531", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Providus Bank", "brand": "MASTERCARD", "bin": "523046", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Providus Bank", "brand": "MASTERCARD", "bin": "523598", "level": "BLACK", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "552160", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "526125", "level": "", "type": "CREDIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "526131", "level": "", "type": "CREDIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "526137", "level": "", "type": "CREDIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "526154", "level": "", "type": "CREDIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "526162", "level": "", "type": "CREDIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "519899", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "519904", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "519905", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "522901", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "524275", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "524687", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "526116", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "527074", "level": "WORLD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "528649", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "528650", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "533122", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "559424", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Stanbic Ibtc Bank Ltd.", "brand": "MASTERCARD", "bin": "559432", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "417059", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "458587", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "458588", "level": "INFINITE", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "471415", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "471463", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "471464", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "422127", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "422808", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "423895", "level": "", "type": "CREDIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "427889", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "439358", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "471458", "level": "INFINITE", "type": "CREDIT" },
    { "issuer": "Standard Chartered Bank Nigeria Ltd.", "brand": "VISA", "bin": "471459", "level": "INFINITE", "type": "DEBIT" },
    { "issuer": "Sterling Bank Plc", "brand": "VISA", "bin": "406162", "level": "", "type": "CREDIT" },
    { "issuer": "Sterling Bank Plc", "brand": "VISA", "bin": "406995", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Sterling Bank Plc", "brand": "VISA", "bin": "430104", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Sterling Bank Plc", "brand": "VISA", "bin": "430116", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Sterling Bank Plc", "brand": "VISA", "bin": "445817", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Sterling Bank Plc", "brand": "VISA", "bin": "450710", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Sterling Bank Plc", "brand": "VISA", "bin": "471232", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Sterling Bank Plc", "brand": "VISA", "bin": "488992", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Sterling Bank Plc", "brand": "MASTERCARD", "bin": "533477", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Sterling Bank Plc", "brand": "MASTERCARD", "bin": "533678", "level": "PREPAID RELOADABLE", "type": "DEBIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "411898", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "444368", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "462091", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "467817", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "473845", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "483427", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "484776", "level": "", "type": "DEBIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "485429", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Unified Payment Services", "brand": "VISA", "bin": "492584", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "469023", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419760", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419761", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419762", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419763", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419764", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419765", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419766", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419767", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "419768", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "420332", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "420333", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "420334", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "420335", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "428272", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "VISA", "bin": "433960", "level": "", "type": "CREDIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "MASTERCARD", "bin": "517214", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "MASTERCARD", "bin": "517294", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "MASTERCARD", "bin": "518539", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "MASTERCARD", "bin": "524289", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "MASTERCARD", "bin": "536024", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "MASTERCARD", "bin": "537691", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Union Bank Of Nigeria Plc", "brand": "MASTERCARD", "bin": "549479", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "404905", "level": "", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "407591", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "420358", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "420359", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "422500", "level": "INFINITE", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "422584", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "422594", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "428223", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "444581", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "444582", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "444585", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "444586", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "445493", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "482132", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "VISA", "bin": "484842", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "517868", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "519863", "level": "WORLD", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "519885", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "519911", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "521090", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "522899", "level": "", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "525634", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "528655", "level": "", "type": "CREDIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "531165", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "538956", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "539586", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "United Bank For Africa Plc", "brand": "MASTERCARD", "bin": "557581", "level": "", "type": "CREDIT" },
    { "issuer": "Unity Bank Plc", "brand": "MASTERCARD", "bin": "521988", "level": "PLATINUM", "type": "DEBIT" },
    { "issuer": "Unity Bank Plc", "brand": "MASTERCARD", "bin": "532155", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Unity Bank Plc", "brand": "MASTERCARD", "bin": "536399", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "Unity Bank Plc", "brand": "MASTERCARD", "bin": "551609", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Valucard Nigeria Plc", "brand": "VISA", "bin": "402438", "level": "", "type": "DEBIT" },
    { "issuer": "Valucard Nigeria Plc", "brand": "VISA", "bin": "424367", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Valucard Nigeria Plc", "brand": "VISA", "bin": "424465", "level": "", "type": "CREDIT" },
    { "issuer": "Valucard Nigeria Plc", "brand": "VISA", "bin": "432288", "level": "", "type": "DEBIT" },
    { "issuer": "Wema Bank Plc", "brand": "VISA", "bin": "457803", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Wema Bank Plc", "brand": "VISA", "bin": "457804", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Wema Bank Plc", "brand": "VISA", "bin": "457805", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Wema Bank Plc", "brand": "VISA", "bin": "457806", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Wema Bank Plc", "brand": "VISA", "bin": "463958", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Wema Bank Plc", "brand": "VISA", "bin": "428270", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Wema Bank Plc", "brand": "VISA", "bin": "472491", "level": "", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "512336", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "513469", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "515803", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "521952", "level": "BUSINESS", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "521982", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "527282", "level": "WORLD", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "529720", "level": "PERSONAL", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "530519", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "531525", "level": "STANDARD", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "533301", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "536579", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "539941", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "540884", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "542231", "level": "PREPAID RELOADABLE", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "547160", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "549970", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "556350", "level": "FLEET", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "559443", "level": "STANDARD", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "412053", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "413103", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "413183", "level": "ELECTRON", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "413185", "level": "GOLD", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "413197", "level": "INFINITE", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "443862", "level": "", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "450073", "level": "CLASSIC", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "450074", "level": "GOLD", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "450075", "level": "PLATINUM", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "450090", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "450091", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "450092", "level": "PREPAID", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "450093", "level": "CORPORATE T&E", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "468588", "level": "CLASSIC", "type": "DEBIT" },
    { "issuer": "Zenith Bank Plc", "brand": "VISA", "bin": "471449", "level": "INFINITE", "type": "CREDIT" },
    { "issuer": "Zenith Bank Plc", "brand": "MASTERCARD", "bin": "553188", "level": "CORPORATE", "type": "CREDIT" }
]

function validateType(validationSchema) {
    if (!Array.isArray(validationSchema)) {
        throw "Invalid Validation Schema!"
    }

    for (let i = 0; i < validationSchema.length; i++) {
        let lengthCheck = Array.isArray(validationSchema[i].value) ? validationSchema[i].value : String(validationSchema[i].value)
        if (typeof validationSchema[i].value !== validationSchema[i].type || lengthCheck.length < validationSchema[i].minLength) {
            throw "Invalid Data Passed As Argument!"
        }
    }
}

export class Issuer {
    constructor(bin = null, issuer = null) {
        if (bin) {
            validateType([{
                value: bin,
                type: "number",
                minLength: 6
            }])
        }

        if (issuer) {
            validateType([{
                value: issuer,
                type: "string",
                minLength: 1
            }])
        }

        this.bin = bin
        this.issuer = issuer
    }

    static allBinsData() {
        return BINS_DATA
    }

    static allIssuers() {
        return [...new Set(BINS_DATA.map(item => item.issuer))]
    }

    static allBins() {
        return BINS_DATA.map(item => item.bin)
    }

    static allBrands() {
        return [...new Set(BINS_DATA.map(item => item.brand))]
    }

    static allLevels() {
        return [...new Set(BINS_DATA.map(item => item.level))]
    }

    static allTypes() {
        return [...new Set(BINS_DATA.map(item => item.type))]
    }

    static issuerData(bin) {
        validateType([{
            value: bin,
            type: "number",
            minLength: 6
        }])

        for (let i = 0; i < BINS_DATA.length; i++) {
            if (bin == BINS_DATA[i].bin) {
                return BINS_DATA[i]
            }
        }

        return false
    }

    static allIssuerBins(issuer) {
        validateType([{
            value: issuer,
            type: "string",
            minLength: 1
        }])

        const output = BINS_DATA.filter(item => issuer === item.issuer).map(item => item.bin)
        return output.length ? output : "Issuer Not Found!"
    }

    static allIsuerCardLevels(issuer) {
        validateType([{
            value: issuer,
            type: "string",
            minLength: 1
        }])

        const output = BINS_DATA.filter(item => issuer === item.issuer).map(item => item.bin)

        return output.length ? output : "Issuer Not Found!"
    }

    static allIsuerCardTypes(issuer) {
        validateType([{
            value: issuer,
            type: "string",
            minLength: 1
        }])

        const output = BINS_DATA.filter(item => issuer === item.issuer).map(item => item.type)

        return output.length ? output : "Issuer Not Found!"
    }

    setBIN(bin) {
        validateType([{
            value: bin,
            type: "number",
            minLength: 6
        }])
        this.bin = bin
        return this
    }

    getIssuerData() {
        return this.constructor.issuerData(this.bin) || "Issuer Not Found!"
    }

    getIssuer() {
        return this.constructor.issuerData(this.bin).issuer || "Issuer Not Found!"
    }

    getBrand() {
        return this.constructor.issuerData(this.bin).brand || "Issuer Not Found!"
    }

    getType() {
        return this.constructor.issuerData(this.bin).type || "Issuer Not Found!"
    }

    getLevel() {
        return this.constructor.issuerData(this.bin).level || "Issuer Not Found!"
    }
}
