(()=>{"use strict";const e=function(e,n,t,d){let i=document.createElement(e);return n&&i.setAttribute("id",n),t&&i.setAttribute("class",t),d&&(i.innerHTML=d),i},n=function(){console.log("Loading contact page."),document.querySelector("main").innerHTML="",document.querySelector("main").appendChild(e("div","contact","center-flex vertical-align"));const n=document.getElementById("contact");n.appendChild(e("h2","","","Contact")),n.appendChild(e("h3","","","Call us: +61 123 456 789")),n.appendChild(e("p","","","E: winny@outlook.com.au")),document.querySelector("footer").classList.add("fixed-bottom"),document.getElementById("menu-btn").addEventListener("click",(()=>d())),document.getElementById("maple").addEventListener("click",(()=>t()))},t=function(){console.log("Loading home page.");const t=document.querySelector("#content");t.innerHTML="",t.appendChild(e("nav")),document.querySelector("nav").appendChild(e("ul"));const i=document.querySelector("ul");i.appendChild(e("li","maple","","Maple's")),i.appendChild(e("li","menu-btn","right","Menu")),i.appendChild(e("li","contact-btn","","Contact")),t.appendChild(e("main"));const o=document.querySelector("main");o.appendChild(e("div","","hero center-flex"));const a=document.querySelector(".hero");a.appendChild(e("h2","","","<span>Welcome to</span><br>Maple's Restaurant.")),a.appendChild(e("div","hero-btn"));const c=document.getElementById("hero-btn");c.appendChild(e("button","","","Delivery")),c.appendChild(e("button","blue-btn","","Book Now")),o.appendChild(e("div","","container"));const l=document.querySelector(".container");l.appendChild(e("div","","side-margin center-flex"));const p=document.querySelector(".side-margin");p.appendChild(e("h2","","","Pancakes are our <br><span>obsession.</span>")),p.appendChild(e("p","","","There's nothing like some fluffy, warm pancakes for breakfast, lunch, and dinner.")),p.appendChild(e("p","","","We're open from <strong>dawn 'til dusk</strong>, so come on in and grab a pancake stacked with fresh fruit, Nutella choc, and our signature Maple Special Syrup.")),l.appendChild(e("div","pancake-image","center-flex"));const r=document.getElementById("pancake-image");let m=document.createElement("img");m.setAttribute("src","./assets/pancake.png"),m.setAttribute("width","256"),m.setAttribute("height","256"),r.appendChild(m),t.appendChild(e("footer"));const u=document.querySelector("footer");u.classList.remove("fixed-bottom"),u.appendChild(e("p","","","Coded by <a href='https://github.com/winnytp/restaurant-page'>@winnytp")),u.appendChild(e("p","","","Maple's © 2021 | All Rights Reserved")),document.getElementById("menu-btn").addEventListener("click",(()=>d())),document.getElementById("contact-btn").addEventListener("click",(()=>n()))},d=function(){console.log("Loading menu page."),document.querySelector("main").innerHTML="",document.querySelector("main").appendChild(e("div","menu","center-flex"));const d=document.getElementById("menu");d.appendChild(e("h2","","","Menu")),d.appendChild(e("div","a-menu","menu-row")),d.appendChild(e("div","b-menu","menu-row"));const i=document.getElementById("a-menu");i.appendChild(e("div","item-1")),i.appendChild(e("div","item-2"));const o=document.getElementById("item-1");o.appendChild(e("h3","","","Delicious Pancakes")),o.appendChild(e("p","","","$12.5 per stack with toppings."));const a=document.getElementById("item-2");a.appendChild(e("h3","","","Slice of Cake")),a.appendChild(e("p","","","$7.5 per slice."));const c=document.getElementById("b-menu");c.appendChild(e("div","item-3")),c.appendChild(e("div","item-4"));const l=document.getElementById("item-3");l.appendChild(e("h3","","","Dunkin' Donuts")),l.appendChild(e("p","","","$2 plain or $2.5 flavoured."));const p=document.getElementById("item-4");p.appendChild(e("h3","","","Any Drink You Want")),p.appendChild(e("p","","","$3 per glass. Unlimited Refills.")),d.appendChild(e("button","","","Order Now")),document.querySelector("footer").classList.add("fixed-bottom"),document.getElementById("maple").addEventListener("click",(()=>t())),document.getElementById("contact-btn").addEventListener("click",(()=>n()))};t(),document.getElementById("maple").addEventListener("click",(()=>t())),document.getElementById("menu-btn").addEventListener("click",(()=>d())),document.getElementById("contact-btn").addEventListener("click",(()=>n()))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFrZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGFnIiwiaWQiLCJjIiwidGV4dCIsImNyZWF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJtYWtlIiwiY29udGFjdERpdiIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRlbnQiLCJuYXZVbCIsIm1haW4iLCJoZXJvIiwiaGVyb0J0biIsImNvbnRhaW5lciIsImNvbnRhaW5lckNvbnRlbnQiLCJwYW5jYWtlSW1hZ2VEaXYiLCJwYW5jYWtlSW1hZ2UiLCJmb290ZXIiLCJyZW1vdmUiLCJtZW51RGl2Iiwicm93QSIsIml0ZW0xIiwiaXRlbTIiLCJyb3dCIiwiaXRlbTMiLCJpdGVtNCJdLCJtYXBwaW5ncyI6Im1CQVFBLFFBUkEsU0FBcUJBLEVBQUtDLEVBQUlDLEVBQUdDLEdBQzdCLElBQUlDLEVBQVNDLFNBQVNDLGNBQWNOLEdBSXBDLE9BSElDLEdBQUlHLEVBQU9HLGFBQWEsS0FBTU4sR0FDOUJDLEdBQUdFLEVBQU9HLGFBQWEsUUFBU0wsR0FDaENDLElBQU1DLEVBQU9JLFVBQVlMLEdBQ3RCQyxHQ3NCWCxFQXZCQSxXQUNJSyxRQUFRQyxJQUFJLHlCQUNaTCxTQUFTTSxjQUFjLFFBQVFILFVBQVksR0FFM0JILFNBQVNNLGNBQWMsUUFDL0JDLFlBQVlDLEVBQVksTUFBTyxVQUFXLCtCQUVsRCxNQUFNQyxFQUFhVCxTQUFTVSxlQUFlLFdBQzNDRCxFQUFXRixZQUFZQyxFQUFZLEtBQU0sR0FBSSxHQUFJLFlBQ2pEQyxFQUFXRixZQUFZQyxFQUFZLEtBQU0sR0FBSSxHQUFJLDZCQUNqREMsRUFBV0YsWUFBWUMsRUFBWSxJQUFLLEdBQUksR0FBSSw0QkFFakNSLFNBQVNNLGNBQWMsVUFDL0JLLFVBQVVDLElBQUksZ0JBR0xaLFNBQVNVLGVBQWUsWUFDaENHLGlCQUFpQixTQUFTLElBQU0sTUFFeEJiLFNBQVNVLGVBQWUsU0FDaENHLGlCQUFpQixTQUFTLElBQU0sT0N5QzVDLEVBN0RBLFdBQ0lULFFBQVFDLElBQUksc0JBRVosTUFBTVMsRUFBVWQsU0FBU00sY0FBYyxZQUN2Q1EsRUFBUVgsVUFBWSxHQUNwQlcsRUFBUVAsWUFBWUMsRUFBWSxRQUVwQlIsU0FBU00sY0FBYyxPQUMvQkMsWUFBWUMsRUFBWSxPQUU1QixNQUFNTyxFQUFRZixTQUFTTSxjQUFjLE1BQ3JDUyxFQUFNUixZQUFZQyxFQUFZLEtBQU0sUUFBUyxHQUFJLFlBQ2pETyxFQUFNUixZQUFZQyxFQUFZLEtBQU0sV0FBWSxRQUFTLFNBQ3pETyxFQUFNUixZQUFZQyxFQUFZLEtBQU0sY0FBZSxHQUFJLFlBRXZETSxFQUFRUCxZQUFZQyxFQUFZLFNBRWhDLE1BQU1RLEVBQU9oQixTQUFTTSxjQUFjLFFBQ3BDVSxFQUFLVCxZQUFZQyxFQUFZLE1BQU8sR0FBSSxxQkFFeEMsTUFBTVMsRUFBT2pCLFNBQVNNLGNBQWMsU0FDcENXLEVBQUtWLFlBQVlDLEVBQVksS0FBTSxHQUFJLEdBQUksbURBQzNDUyxFQUFLVixZQUFZQyxFQUFZLE1BQU8sYUFFcEMsTUFBTVUsRUFBVWxCLFNBQVNVLGVBQWUsWUFDeENRLEVBQVFYLFlBQVlDLEVBQVksU0FBVSxHQUFJLEdBQUksYUFDbERVLEVBQVFYLFlBQVlDLEVBQVksU0FBVSxXQUFZLEdBQUksYUFFMURRLEVBQUtULFlBQVlDLEVBQVksTUFBTyxHQUFJLGNBRXhDLE1BQU1XLEVBQVluQixTQUFTTSxjQUFjLGNBQ3pDYSxFQUFVWixZQUFZQyxFQUFZLE1BQU8sR0FBSSw0QkFFN0MsTUFBTVksRUFBbUJwQixTQUFTTSxjQUFjLGdCQUNoRGMsRUFBaUJiLFlBQVlDLEVBQVksS0FBTSxHQUFJLEdBQUksaURBQ3ZEWSxFQUFpQmIsWUFBWUMsRUFBWSxJQUFLLEdBQUksR0FBSSxzRkFDdERZLEVBQWlCYixZQUFZQyxFQUFZLElBQUssR0FBSSxHQUFJLHFLQUV0RFcsRUFBVVosWUFBWUMsRUFBWSxNQUFPLGdCQUFpQixnQkFFMUQsTUFBTWEsRUFBa0JyQixTQUFTVSxlQUFlLGlCQUNoRCxJQUFJWSxFQUFldEIsU0FBU0MsY0FBYyxPQUMxQ3FCLEVBQWFwQixhQUFhLE1BQU8sd0JBQ2pDb0IsRUFBYXBCLGFBQWEsUUFBUyxPQUNuQ29CLEVBQWFwQixhQUFhLFNBQVUsT0FDcENtQixFQUFnQmQsWUFBWWUsR0FFNUJSLEVBQVFQLFlBQVlDLEVBQVksV0FDaEMsTUFBTWUsRUFBU3ZCLFNBQVNNLGNBQWMsVUFDdENpQixFQUFPWixVQUFVYSxPQUFPLGdCQUN4QkQsRUFBT2hCLFlBQVlDLEVBQVksSUFBSyxHQUFJLEdBQUksMkVBQzVDZSxFQUFPaEIsWUFBWUMsRUFBWSxJQUFLLEdBQUksR0FBSSx5Q0FHNUJSLFNBQVNVLGVBQWUsWUFDaENHLGlCQUFpQixTQUFTLElBQU0sTUFFckJiLFNBQVNVLGVBQWUsZUFDaENHLGlCQUFpQixTQUFTLElBQU0sT0NUL0MsRUFqREEsV0FDSVQsUUFBUUMsSUFBSSxzQkFDWkwsU0FBU00sY0FBYyxRQUFRSCxVQUFZLEdBRTNCSCxTQUFTTSxjQUFjLFFBQy9CQyxZQUFZQyxFQUFZLE1BQU8sT0FBUSxnQkFFL0MsTUFBTWlCLEVBQVV6QixTQUFTVSxlQUFlLFFBQ3hDZSxFQUFRbEIsWUFBWUMsRUFBWSxLQUFNLEdBQUksR0FBSSxTQUM5Q2lCLEVBQVFsQixZQUFZQyxFQUFZLE1BQU8sU0FBVSxhQUNqRGlCLEVBQVFsQixZQUFZQyxFQUFZLE1BQU8sU0FBVSxhQUVqRCxNQUFNa0IsRUFBTzFCLFNBQVNVLGVBQWUsVUFDckNnQixFQUFLbkIsWUFBWUMsRUFBWSxNQUFPLFdBQ3BDa0IsRUFBS25CLFlBQVlDLEVBQVksTUFBTyxXQUVwQyxNQUFNbUIsRUFBUTNCLFNBQVNVLGVBQWUsVUFDdENpQixFQUFNcEIsWUFBWUMsRUFBWSxLQUFNLEdBQUksR0FBSSx1QkFDNUNtQixFQUFNcEIsWUFBWUMsRUFBWSxJQUFLLEdBQUksR0FBSSxtQ0FFM0MsTUFBTW9CLEVBQVE1QixTQUFTVSxlQUFlLFVBQ3RDa0IsRUFBTXJCLFlBQVlDLEVBQVksS0FBTSxHQUFJLEdBQUksa0JBQzVDb0IsRUFBTXJCLFlBQVlDLEVBQVksSUFBSyxHQUFJLEdBQUksb0JBRTNDLE1BQU1xQixFQUFPN0IsU0FBU1UsZUFBZSxVQUNyQ21CLEVBQUt0QixZQUFZQyxFQUFZLE1BQU8sV0FDcENxQixFQUFLdEIsWUFBWUMsRUFBWSxNQUFPLFdBRXBDLE1BQU1zQixFQUFROUIsU0FBU1UsZUFBZSxVQUN0Q29CLEVBQU12QixZQUFZQyxFQUFZLEtBQU0sR0FBSSxHQUFJLG1CQUM1Q3NCLEVBQU12QixZQUFZQyxFQUFZLElBQUssR0FBSSxHQUFJLGdDQUUzQyxNQUFNdUIsRUFBUS9CLFNBQVNVLGVBQWUsVUFDdENxQixFQUFNeEIsWUFBWUMsRUFBWSxLQUFNLEdBQUksR0FBSSx1QkFDNUN1QixFQUFNeEIsWUFBWUMsRUFBWSxJQUFLLEdBQUksR0FBSSxxQ0FFM0NpQixFQUFRbEIsWUFBWUMsRUFBWSxTQUFVLEdBQUksR0FBSSxjQUVuQ1IsU0FBU00sY0FBYyxVQUMvQkssVUFBVUMsSUFBSSxnQkFHTFosU0FBU1UsZUFBZSxTQUNoQ0csaUJBQWlCLFNBQVMsSUFBTSxNQUVyQmIsU0FBU1UsZUFBZSxlQUNoQ0csaUJBQWlCLFNBQVMsSUFBTSxPQzlDL0MsSUFFZ0JiLFNBQVNVLGVBQWUsU0FDaENHLGlCQUFpQixTQUFTLElBQU0sTUFFeEJiLFNBQVNVLGVBQWUsWUFDaENHLGlCQUFpQixTQUFTLElBQU0sTUFFckJiLFNBQVNVLGVBQWUsZUFDaENHLGlCQUFpQixTQUFTLElBQU0sTyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWFrZUVsZW1lbnQodGFnLCBpZCwgYywgdGV4dCkge1xuICAgIGxldCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGlkKSBjcmVhdGUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAoYykgY3JlYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjKTtcbiAgICBpZiAodGV4dCkgY3JlYXRlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgcmV0dXJuIGNyZWF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUVsZW1lbnQiLCJpbXBvcnQgbWFrZUVsZW1lbnQgZnJvbSAnLi9tYWtlLmpzJztcbmltcG9ydCByZW5kZXJIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5mdW5jdGlvbiByZW5kZXJDb250YWN0KCkge1xuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGNvbnRhY3QgcGFnZS4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICdjb250YWN0JywgJ2NlbnRlci1mbGV4IHZlcnRpY2FsLWFsaWduJykpO1xuXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDInLCAnJywgJycsICdDb250YWN0JykpO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gzJywgJycsICcnLCAnQ2FsbCB1czogKzYxIDEyMyA0NTYgNzg5JykpO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCAnJywgJycsICdFOiB3aW5ueUBvdXRsb29rLmNvbS5hdScpKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmaXhlZC1ib3R0b20nKTtcblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyTWVudSgpKTtcblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwbGUnKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVySG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29udGFjdCIsImltcG9ydCBtYWtlRWxlbWVudCBmcm9tICcuL21ha2UuanMnO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgaG9tZSBwYWdlLicpXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ25hdicpKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgndWwnKSk7XG5cbiAgICBjb25zdCBuYXZVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2xpJywgJ21hcGxlJywgJycsIGBNYXBsZSdzYCkpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsICdtZW51LWJ0bicsICdyaWdodCcsICdNZW51JykpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsICdjb250YWN0LWJ0bicsICcnLCAnQ29udGFjdCcpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ21haW4nKSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICcnLCAnaGVybyBjZW50ZXItZmxleCcpKTtcblxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gyJywgJycsICcnLCBgPHNwYW4+V2VsY29tZSB0bzwvc3Bhbj48YnI+TWFwbGUncyBSZXN0YXVyYW50LmApKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAnaGVyby1idG4nKSk7XG5cbiAgICBjb25zdCBoZXJvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8tYnRuJyk7XG4gICAgaGVyb0J0bi5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnYnV0dG9uJywgJycsICcnLCAnRGVsaXZlcnknKSk7XG4gICAgaGVyb0J0bi5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnYnV0dG9uJywgJ2JsdWUtYnRuJywgJycsICdCb29rIE5vdycpKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICcnLCAnY29udGFpbmVyJykpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgJycsICdzaWRlLW1hcmdpbiBjZW50ZXItZmxleCcpKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1tYXJnaW4nKTtcbiAgICBjb250YWluZXJDb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMicsICcnLCAnJywgJ1BhbmNha2VzIGFyZSBvdXIgPGJyPjxzcGFuPm9ic2Vzc2lvbi48L3NwYW4+JykpO1xuICAgIGNvbnRhaW5lckNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCAnJywgJycsIGBUaGVyZSdzIG5vdGhpbmcgbGlrZSBzb21lIGZsdWZmeSwgd2FybSBwYW5jYWtlcyBmb3IgYnJlYWtmYXN0LCBsdW5jaCwgYW5kIGRpbm5lci5gKSk7XG4gICAgY29udGFpbmVyQ29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgncCcsICcnLCAnJywgYFdlJ3JlIG9wZW4gZnJvbSA8c3Ryb25nPmRhd24gJ3RpbCBkdXNrPC9zdHJvbmc+LCBzbyBjb21lIG9uIGluIGFuZCBncmFiIGEgcGFuY2FrZSBzdGFja2VkIHdpdGggZnJlc2ggZnJ1aXQsIE51dGVsbGEgY2hvYywgYW5kIG91ciBzaWduYXR1cmUgTWFwbGUgU3BlY2lhbCBTeXJ1cC5gKSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICdwYW5jYWtlLWltYWdlJywgJ2NlbnRlci1mbGV4JykpO1xuXG4gICAgY29uc3QgcGFuY2FrZUltYWdlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmNha2UtaW1hZ2UnKTtcbiAgICBsZXQgcGFuY2FrZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcGFuY2FrZUltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL3BhbmNha2UucG5nJyk7XG4gICAgcGFuY2FrZUltYWdlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMjU2Jyk7XG4gICAgcGFuY2FrZUltYWdlLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzI1NicpO1xuICAgIHBhbmNha2VJbWFnZURpdi5hcHBlbmRDaGlsZChwYW5jYWtlSW1hZ2UpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZm9vdGVyJykpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZC1ib3R0b20nKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCAnJywgJycsIGBDb2RlZCBieSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vd2lubnl0cC9yZXN0YXVyYW50LXBhZ2UnPkB3aW5ueXRwYCkpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgncCcsICcnLCAnJywgYE1hcGxlJ3MgwqkgMjAyMSB8IEFsbCBSaWdodHMgUmVzZXJ2ZWRgKSk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJNZW51KCkpO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lIiwiaW1wb3J0IG1ha2VFbGVtZW50IGZyb20gJy4vbWFrZS5qcyc7XG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBtZW51IHBhZ2UuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAnbWVudScsICdjZW50ZXItZmxleCcpKTtcblxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnTWVudScpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAnYS1tZW51JywgJ21lbnUtcm93JykpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICdiLW1lbnUnLCAnbWVudS1yb3cnKSk7XG5cbiAgICBjb25zdCByb3dBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EtbWVudScpO1xuICAgIHJvd0EuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICdpdGVtLTEnKSk7XG4gICAgcm93QS5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgJ2l0ZW0tMicpKTtcblxuICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tMScpO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMycsICcnLCAnJywgJ0RlbGljaW91cyBQYW5jYWtlcycpKTtcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgncCcsICcnLCAnJywgJyQxMi41IHBlciBzdGFjayB3aXRoIHRvcHBpbmdzLicpKTtcblxuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tMicpO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMycsICcnLCAnJywgJ1NsaWNlIG9mIENha2UnKSk7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCAnJywgJycsICckNy41IHBlciBzbGljZS4nKSk7XG5cbiAgICBjb25zdCByb3dCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItbWVudScpO1xuICAgIHJvd0IuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICdpdGVtLTMnKSk7XG4gICAgcm93Qi5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgJ2l0ZW0tNCcpKTtcblxuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tMycpO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMycsICcnLCAnJywgYER1bmtpbicgRG9udXRzYCkpO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdwJywgJycsICcnLCBgJDIgcGxhaW4gb3IgJDIuNSBmbGF2b3VyZWQuYCkpO1xuXG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS00Jyk7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gzJywgJycsICcnLCBgQW55IERyaW5rIFlvdSBXYW50YCkpO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdwJywgJycsICcnLCBgJDMgcGVyIGdsYXNzLiBVbmxpbWl0ZWQgUmVmaWxscy5gKSk7XG5cbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdidXR0b24nLCAnJywgJycsICdPcmRlciBOb3cnKSk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQtYm90dG9tJyk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBsZScpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJIb21lKCkpO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51IiwiaW1wb3J0IHJlbmRlck1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCByZW5kZXJIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5yZW5kZXJIb21lKCk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwbGUnKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJIb21lKCkpO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyTWVudSgpKTtcblxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckNvbnRhY3QoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==