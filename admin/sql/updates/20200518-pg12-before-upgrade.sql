\set ON_ERROR_STOP 1

SET search_path = musicbrainz, public;

BEGIN;

-- Unused indexes
DROP INDEX IF EXISTS cdtoc_raw_track_offset;
DROP INDEX IF EXISTS dbmirror_pending_xid_index;
DROP INDEX IF EXISTS edit_note_idx_post_time;
DROP INDEX IF EXISTS edit_note_idx_post_time_edit;
DROP INDEX IF EXISTS editor_collection_idx_name;
DROP INDEX IF EXISTS release_raw_idx_last_modified;
DROP INDEX IF EXISTS release_raw_idx_lookup_count;
DROP INDEX IF EXISTS release_raw_idx_modify_count;
DROP INDEX IF EXISTS track_idx_musicbrainz_collate;
DROP INDEX IF EXISTS track_idx_name;
DROP INDEX IF EXISTS track_idx_txt;
DROP INDEX IF EXISTS vote_idx_vote_time;

-- Indexes using musicbrainz_unaccent (via the mb_simple search configuration)
DROP INDEX IF EXISTS area_alias_idx_txt;
DROP INDEX IF EXISTS area_alias_idx_txt_sort;
DROP INDEX IF EXISTS area_idx_name_txt;
DROP INDEX IF EXISTS artist_alias_idx_txt;
DROP INDEX IF EXISTS artist_alias_idx_txt_sort;
DROP INDEX IF EXISTS artist_credit_idx_txt;
DROP INDEX IF EXISTS artist_credit_name_idx_txt;
DROP INDEX IF EXISTS artist_idx_txt;
DROP INDEX IF EXISTS artist_idx_txt_sort;
DROP INDEX IF EXISTS event_alias_idx_txt;
DROP INDEX IF EXISTS event_alias_idx_txt_sort;
DROP INDEX IF EXISTS event_idx_txt;
DROP INDEX IF EXISTS instrument_idx_txt;
DROP INDEX IF EXISTS label_alias_idx_txt;
DROP INDEX IF EXISTS label_alias_idx_txt_sort;
DROP INDEX IF EXISTS label_idx_txt;
DROP INDEX IF EXISTS place_alias_idx_txt;
DROP INDEX IF EXISTS place_alias_idx_txt_sort;
DROP INDEX IF EXISTS place_idx_name_txt;
DROP INDEX IF EXISTS recording_alias_idx_txt;
DROP INDEX IF EXISTS recording_alias_idx_txt_sort;
DROP INDEX IF EXISTS recording_idx_txt;
DROP INDEX IF EXISTS release_alias_idx_txt;
DROP INDEX IF EXISTS release_alias_idx_txt_sort;
DROP INDEX IF EXISTS release_group_alias_idx_txt;
DROP INDEX IF EXISTS release_group_alias_idx_txt_sort;
DROP INDEX IF EXISTS release_group_idx_txt;
DROP INDEX IF EXISTS release_idx_txt;
DROP INDEX IF EXISTS series_alias_idx_txt;
DROP INDEX IF EXISTS series_alias_idx_txt_sort;
DROP INDEX IF EXISTS series_idx_txt;
DROP INDEX IF EXISTS tag_idx_name_txt;
DROP INDEX IF EXISTS track_idx_txt;
DROP INDEX IF EXISTS work_alias_idx_txt;
DROP INDEX IF EXISTS work_alias_idx_txt_sort;
DROP INDEX IF EXISTS work_idx_txt;

-- Indexes using musicbrainz_collate
DROP INDEX IF EXISTS release_idx_musicbrainz_collate;
DROP INDEX IF EXISTS release_group_idx_musicbrainz_collate;
DROP INDEX IF EXISTS artist_idx_musicbrainz_collate;
DROP INDEX IF EXISTS artist_credit_idx_musicbrainz_collate;
DROP INDEX IF EXISTS artist_credit_name_idx_musicbrainz_collate;
DROP INDEX IF EXISTS label_idx_musicbrainz_collate;
DROP INDEX IF EXISTS track_idx_musicbrainz_collate;
DROP INDEX IF EXISTS recording_idx_musicbrainz_collate;
DROP INDEX IF EXISTS work_idx_musicbrainz_collate;

DROP TEXT SEARCH CONFIGURATION IF EXISTS mb_simple;
DROP EXTENSION IF EXISTS musicbrainz_collate;
DROP EXTENSION IF EXISTS musicbrainz_unaccent;

-- Index using broken public.ll_to_earth
DROP INDEX IF EXISTS place_idx_geo;

COMMIT;
