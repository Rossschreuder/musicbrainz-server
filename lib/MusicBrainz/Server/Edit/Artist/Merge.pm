package MusicBrainz::Server::Edit::Artist::Merge;
use Moose;

use MooseX::Types::Moose qw( ArrayRef Bool Int Str );
use MooseX::Types::Structured qw( Dict );
use MusicBrainz::Server::Constants qw( $EDIT_ARTIST_MERGE );
use MusicBrainz::Server::Translation qw ( l ln );

extends 'MusicBrainz::Server::Edit::Generic::Merge';

sub edit_name { l('Merge artists') }
sub edit_type { $EDIT_ARTIST_MERGE }

sub _merge_model { 'Artist' }

has '+data' => (
    isa => Dict[
        new_entity => Dict[
            id   => Int,
            name => Str
        ],
        old_entities => ArrayRef[ Dict[
            name => Str,
            id   => Int
        ] ],
        preserve_names => Bool
    ]
);

override 'accept' => sub
{
    my $self = shift;
    $self->c->model('Artist')->merge(
        $self->new_entity->{id},
        $self->_old_ids,
        preverse_names => $self->data->{preserve_names}
    );
};

__PACKAGE__->meta->make_immutable;
no Moose;

1;
