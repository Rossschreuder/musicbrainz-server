/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */


export type ReportArtistAnnotationT = {|
  +artist: ArtistT,
  +artist_id: number,
  +created: string,
  +row_number: number,
  +text: string,
|};

export type ReportArtistRelationshipT = {|
  +artist: ArtistT,
  +artist_id: number,
  +link_gid: string,
  +link_name: string,
  +row_number: number,
|};

export type ReportArtistT = {|
  +alias?: string,
  +artist: ArtistT,
  +artist_id: number,
  +key?: string,
  +row_number: number,
|};

export type ReportArtistUrlT = {|
  +artist: ArtistT,
  +artist_id: number,
  +row_number: number,
  +url: UrlT,
|};

export type ReportCollaborationT = {|
  +artist0: ArtistT,
  +artist1: ArtistT,
  +id0: number,
  +id1: number,
  +name0: string,
  +name1: string,
  +row_number: number,
|};

export type ReportDataT<T> = {|
  +$c: CatalystContextT,
  +canBeFiltered: boolean,
  +filtered: boolean,
  +generated: string,
  +items: $ReadOnlyArray<T>,
  +pager: PagerT,
|};

export type ReportEditorT = {|
  +editor: EditorT,
  +id: number,
  +row_number: number,
|};

export type ReportEventT = {|
  +event: EventT,
  +event_id: number,
  +row_number: number,
|};

export type ReportInstrumentT = {|
  +instrument: InstrumentT,
  +instrument_id: number,
  +row_number: number,
|};

export type ReportIsrcT = {|
  +isrc: string,
  +length: number,
  +name: string,
  +recording: RecordingT,
  +recording_id: string,
  +recordingcount: number,
  +row_number: number,
  +text: string,
|};

export type ReportIswcT = {|
  +iswc: string,
  +row_number: number,
  +text: string,
  +work: WorkT,
  +work_id: string,
  +workcount: number,
|};

export type ReportLabelAnnotationT = {|
  +created: string,
  +label: LabelT,
  +label_id: number,
  +row_number: number,
  +text: string,
|};

export type ReportLabelRelationshipT = {|
  +label: LabelT,
  +label_id: number,
  +link_gid: string,
  +link_name: string,
  +row_number: number,
|};

export type ReportLabelT = {|
  +label: LabelT,
  +label_id: number,
  +row_number: number,
|};

export type ReportLabelUrlT = {|
  +label: LabelT,
  +label_id: number,
  +row_number: number,
  +url: UrlT,
|};

export type ReportReleaseGroupAnnotationT = {|
  +created: string,
  +release_group: ReleaseGroupT,
  +release_group_id: number,
  +row_number: number,
  +text: string,
|};

export type ReportReleaseGroupRelationshipT = {|
  +link_gid: string,
  +link_name: string,
  +release_group: ReleaseGroupT,
  +release_group_id: number,
  +row_number: number,
|};

export type ReportReleaseGroupT = {|
  +key?: string,
  +release_group: ReleaseGroupT,
  +release_group_id: number,
  +row_number: number,
|};

export type ReportReleaseGroupUrlT = {|
  +release_group: ReleaseGroupT,
  +release_group_id: number,
  +row_number: number,
  +url: UrlT,
|};