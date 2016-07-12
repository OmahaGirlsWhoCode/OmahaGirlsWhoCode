$(document).ready(function() {
  $('<div class="badge-container"><div class="gwc-badge instructor">{I}</div></div>').appendTo('.badges.badge-instructor');
  $('<div class="badge-container"><div class="gwc-badge ta">[TA]</div></div>').appendTo('.badges.badge-ta');
  $('<div class="badge-container"><div class="gwc-badge organizer">&lt;O&gt;</div></div>').appendTo('.badges.badge-organizer');
  $('<div class="badge-container"><div class="gwc-badge speaker">"S"</div></div>').appendTo('.badges.badge-speaker');
});