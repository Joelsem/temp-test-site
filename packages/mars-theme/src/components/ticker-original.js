/*

This is the PHP that was used to anchor the ticker javascript (below)

  wp_enqueue_script( 'jquery-countTo', get_template_directory_uri() . '/js/vendor/jquery.countTo.js', array ( 'jquery' ), IR_THEME_VERSION, true);

  $id = 'tokenstats-' . $block['id'];
  $panel_anchor_id = get_field('panel_anchor_id');
  $title = get_field('title');
?>

<section
  data-id="<?php echo $id; ?>"
  id="<?php echo $panel_anchor_id; ?>"
  class="
    panel
    type-tokenstats
    bg-grey-2
    data-stats
    ticker
    block
  "
  >
  <div class="marquee-container">
    <p class="marquee-text">
      <span>AGX Retail Price: </span>
      EUR €<b agx-ex-rate-eur></b> &#8211;
      GBP £<b agx-ex-rate-gbp></b> &#8211;
      USD $<b agx-ex-rate-usd></b> &#8211;
      CAD $<b agx-ex-rate-cad></b> &#8211;
      JPY ¥<b agx-ex-rate-jpy></b> &#8211;
      MXN $<b agx-ex-rate-mxn></b> &#8211;
      BTC ₿<b agx-ex-rate-btc></b> &#8211;
      LTC Ł<b agx-ex-rate-ltc></b> &#8211;
      ETH Ξ<b agx-ex-rate-eth></b>&nbsp;&nbsp;|&nbsp;&nbsp;
      
      <span>LODE Price Equivalent to: </span>
      EUR €<b lode-ex-rate-eur></b> &#8211;
      GBP £<b lode-ex-rate-gbp></b> &#8211;
      USD $<b lode-ex-rate-usd></b> &#8211;
      CAD $<b lode-ex-rate-cad></b> &#8211;
      JPY ¥<b lode-ex-rate-jpy></b> &#8211;
      MXN $<b lode-ex-rate-mxn></b> |
      <b lode-rate></b> &#8211;
      BTC ₿<b lode-ex-rate-btc></b> &#8211;
      LTC Ł<b lode-ex-rate-ltc></b> &#8211;
      ETH Ξ<b lode-ex-rate-eth></b>&nbsp;&nbsp;

      <span>AUX Retail Price: </span>
      EUR €<b aux-ex-rate-eur></b> &#8211;
      GBP £<b aux-ex-rate-gbp></b> &#8211;
      USD $<b aux-ex-rate-usd></b> &#8211;
      CAD $<b aux-ex-rate-cad></b> &#8211;
      JPY ¥<b aux-ex-rate-jpy></b> &#8211;
      MXN $<b aux-ex-rate-mxn></b> &#8211;
      BTC ₿<b aux-ex-rate-btc></b> &#8211;
      LTC Ł<b aux-ex-rate-ltc></b> &#8211;
      ETH Ξ<b aux-ex-rate-eth></b>&nbsp;&nbsp;|&nbsp;&nbsp;
    </p>
  </div>
</section>

*/


var GetTokenInfo = /*#__PURE__*/function () {
    function GetTokenInfo(el, tickerEl) {
      _classCallCheck(this, GetTokenInfo);

      this.el = el;
      this.tickerEl = tickerEl;
      this.lodeMembers = 0;
      this.lodeTokensMinted = 0;
      this.lodeExchangeRate = 0;
      this.agxExchangeRate = 0;
      this.lodeExchangeRates = {
        usd: 0,
        eur: 0,
        cad: 0,
        mxn: 0,
        gbp: 0,
        jpy: 0,
        btc: 0,
        ltc: 0,
        eth: 0
      };
      this.agxExchangeRates = {
        usd: 0,
        eur: 0,
        cad: 0,
        mxn: 0,
        gbp: 0,
        jpy: 0,
        btc: 0,
        ltc: 0,
        eth: 0
      };
      this.auxExchangeRates = {
        usd: 0,
        eur: 0,
        cad: 0,
        mxn: 0,
        gbp: 0,
        jpy: 0,
        btc: 0,
        ltc: 0,
        eth: 0
      }; // Elements

      this.lodeMembersElement = this.el.find("[lode-members]");
      this.lodeTokensMintedElement = this.el.find("[lode-tokens-minted]");
      this.lodeExchangeRateElement = this.el.find("[lode-exchange]");
      this.agxExchangeRateElement = this.el.find("[agx-exchange]");
      this.auxExchangeRateElement = this.el.find("[aux-exchange]");
    }

    _createClass(GetTokenInfo, [{
      key: "formatNumber",
      value: function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      }
    }, {
      key: "getSigDigs",
      value: function getSigDigs(num) {
        var str = num;

        if (/\.0+$/.test(str)) {
          var zeros = str.match(/[0]+$/)[0].length; // count the no. of trailing zeros

          var sigfigs = parseFloat(str).toString().length; // no. of other sig figs

          var zerosNeeded = 3 - sigfigs;

          if (zerosNeeded < 0) {
            return parseFloat(parseFloat(str).toPrecision(4)).toFixed();
          } else {
            return str.substring(0, sigfigs + 1 + zerosNeeded); // +1 for the decimal point
          }
        } else {
          return parseFloat(parseFloat(str).toPrecision(4)).toString();
        }
      } // Take data from variables and append them to the DOM elements

    }, {
      key: "populateData",
      value: function populateData(option) {
        this.lodeMembersElement.addClass("processed");
        this.lodeTokensMintedElement.addClass("processed");
        this.lodeExchangeRateElement.addClass("processed");
        this.agxExchangeRateElement.addClass("processed");
        this.auxExchangeRateElement.addClass("processed");

        if (option != "noticker") {
          this.tickerEl.find("[lode-ex-rate-usd]") //.text(this.lodeExchangeRates.usd.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.usd));
          this.tickerEl.find("[lode-ex-rate-eur]") //.text(this.lodeExchangeRates.eur.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.eur));
          this.tickerEl.find("[lode-ex-rate-cad]") //.text(this.lodeExchangeRates.cad.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.cad));
          this.tickerEl.find("[lode-ex-rate-mxn]") //.text(this.lodeExchangeRates.mxn.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.mxn));
          this.tickerEl.find("[lode-ex-rate-gbp]") //.text(this.lodeExchangeRates.gbp.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.gbp));
          this.tickerEl.find("[lode-ex-rate-jpy]") //.text(this.lodeExchangeRates.jpy.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.jpy));
          this.tickerEl.find("[lode-ex-rate-btc]") //.text(this.lodeExchangeRates.btc.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.btc));
          this.tickerEl.find("[lode-ex-rate-ltc]") //.text(this.lodeExchangeRates.ltc.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.ltc));
          this.tickerEl.find("[lode-ex-rate-eth]") //.text(this.lodeExchangeRates.eth.toFixed(4));
          .text(this.getSigDigs(this.lodeExchangeRates.eth));
          this.tickerEl.find("[agx-ex-rate-usd]") //.text(this.agxExchangeRates.usd.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.usd));
          this.tickerEl.find("[agx-ex-rate-eur]") //.text(this.agxExchangeRates.eur.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.eur));
          this.tickerEl.find("[agx-ex-rate-cad]") //.text(this.agxExchangeRates.cad.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.cad));
          this.tickerEl.find("[agx-ex-rate-mxn]") //.text(this.agxExchangeRates.mxn.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.mxn));
          this.tickerEl.find("[agx-ex-rate-gbp]") //.text(this.agxExchangeRates.gbp.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.gbp));
          this.tickerEl.find("[agx-ex-rate-jpy]") //.text(this.agxExchangeRates.jpy.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.jpy));
          this.tickerEl.find("[agx-ex-rate-btc]") //.text(this.agxExchangeRates.btc.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.btc));
          this.tickerEl.find("[agx-ex-rate-ltc]") //.text(this.agxExchangeRates.ltc.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.ltc));
          this.tickerEl.find("[agx-ex-rate-eth]") //.text(this.agxExchangeRates.eth.toFixed(4));
          .text(this.getSigDigs(this.agxExchangeRates.eth));
          this.tickerEl.find("[aux-ex-rate-usd]") //.text(this.agxExchangeRates.usd.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.usd));
          this.tickerEl.find("[aux-ex-rate-eur]") //.text(this.agxExchangeRates.eur.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.eur));
          this.tickerEl.find("[aux-ex-rate-cad]") //.text(this.agxExchangeRates.cad.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.cad));
          this.tickerEl.find("[aux-ex-rate-mxn]") //.text(this.agxExchangeRates.mxn.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.mxn));
          this.tickerEl.find("[aux-ex-rate-gbp]") //.text(this.agxExchangeRates.gbp.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.gbp));
          this.tickerEl.find("[aux-ex-rate-jpy]") //.text(this.agxExchangeRates.jpy.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.jpy));
          this.tickerEl.find("[aux-ex-rate-btc]") //.text(this.agxExchangeRates.btc.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.btc));
          this.tickerEl.find("[aux-ex-rate-ltc]") //.text(this.agxExchangeRates.ltc.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.ltc));
          this.tickerEl.find("[aux-ex-rate-eth]") //.text(this.agxExchangeRates.eth.toFixed(4));
          .text(this.getSigDigs(this.auxExchangeRates.eth));
          this.tickerEl.find("[agx-rate]").text(this.agxExchangeRate.toFixed(4) + " grams Ag");
          this.tickerEl.find("[lode-rate]").text(this.lodeExchangeRate.toFixed(4) + " grams Ag");
        }

        if (option != "nomain") {
          this.addScrollAnimate();
        }
      } // abbreviate any given number to use the common numerical notation of 'million', 'billion' etc..

    }, {
      key: "abbreviate",
      value: function abbreviate(number, maxPlaces, forcePlaces, forceLetter) {
        number = Number(number);
        forceLetter = forceLetter || false;

        if (forceLetter !== false) {
          return this.annotate(number, maxPlaces, forcePlaces, forceLetter);
        }

        var abbr;

        if (number >= 1e12) {
          abbr = "T";
        } else if (number >= 1e9) {
          abbr = "B";
        } else if (number >= 1e6) {
          abbr = "M";
        } else if (number >= 1e3) {
          abbr = "K";
        } else {
          abbr = "";
        }

        return this.annotate(number, maxPlaces, forcePlaces, abbr);
      }
    }, {
      key: "annotate",
      value: function annotate(number, maxPlaces, forcePlaces, abbr) {
        // set places to false to not round
        var rounded = 0;

        switch (abbr) {
          case "T":
            rounded = number / 1e12;
            break;

          case "B":
            rounded = number / 1e9;
            break;

          case "M":
            rounded = number / 1e6;
            break;

          case "K":
            rounded = number / 1e3;
            break;

          case "":
            rounded = number;
            break;
        }

        if (maxPlaces !== false) {
          var test = new RegExp("\\.\\d{" + (maxPlaces + 1) + ",}$");

          if (test.test("" + rounded)) {
            rounded = rounded.toFixed(maxPlaces);
          }
        }

        if (forcePlaces !== false) {
          rounded = Number(rounded).toFixed(forcePlaces);
        }

        return rounded + abbr;
      } // On viewport entry via scroll, animate the numbers to their values

    }, {
      key: "addScrollAnimate",
      value: function addScrollAnimate() {
        var _this2 = this;

        var that = this;
        var isScrolled = 0;

        var addCount = function addCount() {
          if ($(window).scrollTop() + $(window).height() > that.el.offset().top && isScrolled == 0) {
            isScrolled = 1;

            _this2.lodeMembersElement.find("[data-count]").countTo({
              from: 0,
              to: that.lodeMembers,
              speed: 500,
              refreshInterval: 1,
              formatter: function formatter(value, options) {
                value = value.toFixed(options.decimals);
                value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return value;
              }
            });

            _this2.lodeTokensMintedElement.find("[data-count]").countTo({
              from: 0,
              to: that.lodeTokensMinted,
              speed: 500,
              refreshInterval: 1,
              formatter: function formatter(value, options) {
                var val = that.abbreviate(value, 2, false, false);
                return val;
              }
            });

            _this2.lodeExchangeRateElement.find("[data-count]").countTo({
              from: 0,
              to: that.lodeExchangeRate,
              speed: 500,
              refreshInterval: 1,
              formatter: function formatter(value, options) {
                return value.toFixed(3) + "g";
              }
            });

            _this2.agxExchangeRateElement.find("[data-count]").countTo({
              from: 0,
              to: that.agxExchangeRate,
              speed: 500,
              refreshInterval: 1,
              formatter: function formatter(value, options) {
                return value.toFixed(3) + "g";
              }
            });

            _this2.auxExchangeRateElement.find("[data-count]").countTo({
              from: 0,
              to: that.auxExchangeRate,
              speed: 500,
              refreshInterval: 1,
              formatter: function formatter(value, options) {
                return value.toFixed(3) + "mg";
              }
            });
          }
        };

        addCount();
        $(window).scroll(function () {
          addCount();
        });
      }
    }, {
      key: "init",
      value: function init() {
        var that = this;

        if (that.el.length > 0 || that.tickerEl.length > 0) {
          $.getJSON("https://members.lode.one/api/publicinfo", function () {}).done(function (obj) {
            that.lodeMembers = obj.data.count_users;
            that.lodeTokensMinted = obj.data.lode_tokens_minted;
            that.lodeExchangeRate = obj.data.lode_rate * 1;
            that.agxExchangeRate = obj.data.agx_rate * 1;
            that.auxExchangeRate = obj.data.aux_rate * 1; // ticker values
            // lode

            that.lodeExchangeRates.usd = obj.data.oracle.quotes[0].lastPrice * obj.data.lode_rate;
            that.lodeExchangeRates.eur = obj.data.oracle.quotes[1].lastPrice * obj.data.lode_rate;
            that.lodeExchangeRates.cad = obj.data.oracle.quotes[2].lastPrice * obj.data.lode_rate;
            that.lodeExchangeRates.mxn = obj.data.oracle.quotes[3].lastPrice * obj.data.lode_rate;
            that.lodeExchangeRates.gbp = obj.data.oracle.quotes[4].lastPrice * obj.data.lode_rate;
            that.lodeExchangeRates.jpy = obj.data.oracle.quotes[5].lastPrice * obj.data.lode_rate;
            that.lodeExchangeRates.btc = obj.data.oracle.quotes[6].lastPrice * obj.data.lode_rate;
            that.lodeExchangeRates.ltc = obj.data.oracle.quotes[7].lastPrice * obj.data.lode_rate;
            that.lodeExchangeRates.eth = obj.data.oracle.quotes[8].lastPrice * obj.data.lode_rate; // agx

            that.agxExchangeRates.usd = obj.data.oracle.quotes[0].lastPrice * obj.data.agx_rate;
            that.agxExchangeRates.eur = obj.data.oracle.quotes[1].lastPrice * obj.data.agx_rate;
            that.agxExchangeRates.cad = obj.data.oracle.quotes[2].lastPrice * obj.data.agx_rate;
            that.agxExchangeRates.mxn = obj.data.oracle.quotes[3].lastPrice * obj.data.agx_rate;
            that.agxExchangeRates.gbp = obj.data.oracle.quotes[4].lastPrice * obj.data.agx_rate;
            that.agxExchangeRates.jpy = obj.data.oracle.quotes[5].lastPrice * obj.data.agx_rate;
            that.agxExchangeRates.btc = obj.data.oracle.quotes[6].lastPrice * obj.data.agx_rate;
            that.agxExchangeRates.ltc = obj.data.oracle.quotes[7].lastPrice * obj.data.agx_rate;
            that.agxExchangeRates.eth = obj.data.oracle.quotes[8].lastPrice * obj.data.agx_rate; //aux

            that.auxExchangeRates.usd = obj.data.oracle.aux.quotes[0].lastPrice * obj.data.aux_rate;
            that.auxExchangeRates.eur = obj.data.oracle.aux.quotes[1].lastPrice * obj.data.aux_rate;
            that.auxExchangeRates.cad = obj.data.oracle.aux.quotes[2].lastPrice * obj.data.aux_rate;
            that.auxExchangeRates.mxn = obj.data.oracle.aux.quotes[3].lastPrice * obj.data.aux_rate;
            that.auxExchangeRates.gbp = obj.data.oracle.aux.quotes[4].lastPrice * obj.data.aux_rate;
            that.auxExchangeRates.jpy = obj.data.oracle.aux.quotes[5].lastPrice * obj.data.aux_rate;
            that.auxExchangeRates.btc = obj.data.oracle.aux.quotes[6].lastPrice * obj.data.aux_rate;
            that.auxExchangeRates.ltc = obj.data.oracle.aux.quotes[7].lastPrice * obj.data.aux_rate;
            that.auxExchangeRates.eth = obj.data.oracle.aux.quotes[8].lastPrice * obj.data.aux_rate;

            if (that.el.length > 0 && that.tickerEl.length > 0) {
              that.populateData();
            } else if (that.el.length <= 0) {
              that.populateData("nomain");
            } else if (that.elTicker.length <= 0) {
              that.populateData("noticker");
            }
          }).fail(function () {
            that.el.remove();
            that.tickerEl.remove();
          });
        }
      }
    }]);

    return GetTokenInfo;
}();
    $(function () {
        var app = new App();
        var getTokenInfo = new GetTokenInfo($("section.data-stats"), $("section.ticker"));
        app.init();
        getTokenInfo.init(); // On-screen animation init
    
        if ($('[data-aos]').length > 0) {
          setTimeout(function () {
            AOS.init({
              offset: 0,
              delay: 10,
              duration: 800,
              easing: 'ease-in-out',
              mirror: false
            });
          }, 500);
        }
    });